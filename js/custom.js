$(window).on('load',() => {
	$('.loader-flex-fix').fadeOut();
})
$(document).ready(() =>
{
	window.onerror = (message, url , line) => {
		console.log('Poruka: ' + message);
		console.log('URL: ' + url);
		console.log('Linija u kojoj je nastala greska: ' + line);
	}
	"use strict";
	//region Global variables

	//region Template variables
	const header = $('.header');
	const hamburger = $('.hamburger_container');
	const menu = $('.hamburger_menu');
	var menuActive = false;
	const hamburgerClose = $('.hamburger_close');
	const fsOverlay = $('.fs_menu_overlay');
	//endregion

	//region My variables
	//region Location
	const location = window.location.pathname;
	//endregion
	//region Data storage
	var allGames, categories, modes, otherFilters;
	//endregion
	//region Rotate Font Awesome
	var degreesCat = 0, degreesPrice = 0, degreesMore = 0, degreesOther = 0;
	//endregion
	//region Store max items
	var maxItemsStore = 9;
	//endregion
	//region Filter
	var filtered;
	var checkedCat = [];
	var checkedMode = [];
	var checkedOther = [];
	//endregion
	//region Price
	var priceTo = 60;
	var priceFrom = 0;
	//endregion
	//region Newsletter
	var news = []; // ubacivanje mejlova za newsletter
	//endregion
	//endregion

	//endregion

	//region Every page init - Header & Menu - Newsletter check
	setHeader();
	initMenu();
	checkCookieNewsletter();// dohvatamo kolacice za newsletter, tj ako postoje vec uneti mejlovi
	checkCartAmount();
	getData('navigation', displayNav);
	//endregion

	//region Page location
	if(location.indexOf("index") !== -1 || location == "/gamehut/")
	{
		getData('allGames', displayHomeSlider);
		displayCountdown();
		getData('allGames', displayAllSections);
		getData('comingSoon', displayComingSoon);
		removePng();
	}
	else if(location.indexOf("single") !== -1)
	{
		getData('allGames', displaySingle);
	}
	else if(location.indexOf("shop") !== -1)
	{
		let promise = new Promise( (resolve, reject) => { // preko promise-a jer mi je izbacivalo da je promenljiva allGames undefined kad pokusam da ispisem broj igrica za odredjenu kategoriju
				return resolve(getData('allGames', displayStoreFirst));
			})
		promise.then((data) => {
			//console.log(data) ispisuje sve igrice, potrebne za filtriranje unutar funkcije displayCheckbox za broj igrica po kategorijama! ! ! !
			try{
				getCategories(displayCheckbox, "categoryChb", categories, "categories");
				getCategories(displayCheckbox, "mode", modes, "modes");
				getCategories(displayCheckbox, "otherFilter", otherFilters, "otherFilters");
			}
			catch (e){
				console.error(e.message);
			}

		})
		getData('comingSoon', displayComingSoon);
		filterResponsive();
	}
	else if(location.indexOf("contact") !== -1){
		const form = document.getElementById('contact');
		const fullName = document.getElementById('input_name');
		const mail = document.getElementById('input_email');
		const subject = document.getElementById('input_subject')
		const message = document.getElementById('input_message');
		var correctName = false, correctMail = false, correctSubject = false, correctMessage = false;

		const fullNameReg = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/;
		const subjectReg = /^[A-ZŠĐČĆŽ][a-zšđčćžA-ZŠĐČĆŽ0-9-_ ]+$/;
		const messageLength = 20;

		fullName.onchange = () => {
			checkInputValues(fullName, 'name', fullNameReg, 'Name cannot be empty.', 'First name/last name must start with capital letter');
		};
		mail.onchange = () =>{
			checkInputValues(mail, 'mail', mailReg, 'Mail cannot be empty.', 'Mail is not in a good format. (E.q: johndoe5@gmail.com)');
		};
		subject.onchange = () => {
			checkInputValues(subject, 'subject', subjectReg, 'Subject cannot be empty.', 'Subject must start with capital letter.');
		};
		message.onchange = () => {
			checkMessage();
		};
		form.onsubmit = (event) =>{
			event.preventDefault();
			correctName = checkInputValues(fullName, 'name', fullNameReg, 'Name cannot be empty.', 'First name/last name must start with capital letter');
			correctMail = checkInputValues(mail, 'mail', mailReg, 'Mail cannot be empty.', 'Mail is not in a good format. (E.q: johndoe5@gmail.com)');
			correctSubject = checkInputValues(subject, 'subject', subjectReg, 'Subject cannot be empty.', 'Subject must start with capital letter.');
			correctMessage = checkMessage();
			if(correctName && correctMail && correctSubject && correctMessage){
				let isSent = checkMessageCookie();
				if(isSent.val){
					displayMessageModal(`You must wait ${isSent.msg} minutes to send another message.`);
				}
				else{
					displayMessageModal('You have successfully sent a message.');
					setMessageCookie('message', 'sent', 1);
				}
			}
		};
		function checkMessage(){
			let val = false;
			let err;
			if(message.value.length < messageLength){
				if(!message.value.length){
					err = 'Message cannot be empty.';
				}
				else {
					err = 'Message must contain at least 20 characters.';
				}
				$('.message').html(err);
				$(message).css('border', '2px solid #e21e21');
			}
			else{
				$(message).css('border', '2px solid green');
				$('.message').html('');
				val = true;
			}
			return val;
		}
		var messageExpireTime;
		function setMessageCookie(name, value, duration){ // cookie za vremensko ogranicenje slanja ponovnih poruka
			let date = new Date();
			date.setUTCHours(date.getUTCHours() + duration);
			document.cookie = `${name}=${value}; expires=${date.toUTCString()}; secure`
			document.cookie = `msgTime=${date.toUTCString()}; expires=${date.toUTCString()}; secure`
		}
		function checkMessageCookie(){
			let cookie = document.cookie.split('; ').find(message => message.startsWith('message'));
			if(cookie){
				let msgTime = document.cookie.split('; ').find(message => message.startsWith('msgTime'));
				let date = new Date(msgTime.split('=')[1]);
				let now = new Date();
				let difference = date.getTime() - now.getTime();
				let minutesLeft = Math.round(difference / 60000);
				return {
					val : true,
					msg : minutesLeft
				};
			}
			else{
				return false;
			}
		}
	}
	else if(location.indexOf("cart") !== - 1){
		displayCart();
		getTotal();
		function displayCart(){
			if(localStorage.getItem('addedGame')){
				let gamesList = JSON.parse(localStorage.getItem('addedGame'));
				let cart = '';
				for(let game of gamesList){
					cart += ` <li class="my-2">
			                        <div class="cart-item row m-0 py-3">
			                            <div class="cart-item-img col-12 col-sm-4 col-md-3 d-flex justify-content-center align-items-center pb-3 pb-sm-0">
			                                <a href="single.html" class="openSingle" data-id="${game.id}"><img src="${game.image}" alt="${game.name}" class="img-fluid"></a>
			                            </div>
			                            <div class="col-12 col-sm-8 col-md-9 d-flex flex-column ">
				                            <div class="cart-item-name d-flex justify-content-start flex-row">
				                                <p class="m-0">Name:</p><a href="single.html" class="openSingle" data-id="${game.id}"><h5 class="ml-2 game-name">${game.name}</h5></a>
				                            </div>
				                            <div class='d-flex justify-content-start flex-row'>
												<p class="m-0">Price:</p><h5 class="ml-2"><i class="fas fa-euro-sign"></i> ${game.price}</h5>
											</div>
											<div class='d-flex justify-content-start flex-row'>
												<p class="m-0">Quantity:</p>
												<h5 class="ml-2 mb-0">${game.quantity}</h5>
												<button type="button" data-quantity="raise" data-id="${game.id}" class="quantityBtn"><i class="fas fa-plus"></i></button>
												<button type="button" data-quantity="lower" data-id="${game.id}" class="quantityBtn"><i class="fas fa-minus"></i></button>
											</div>
											<button type="button" class="removeGame d-flex justify-content-center align-items-center" data-id='${game.id}'><i class="fas fa-trash-alt d-block"></i></button>
			                            </div>
			                        </div>
			                    </li>`
				}
				$('#games-list').html(cart);
			}
			else{
				let text = "<li class='my-2'><div class=\"cart-item col-12 pt-4\"><h5>You have no games added into your cart.</h5><a href='shop.html'><button type='button' id='sendToShop'>Shop now!</button> </a></div></li>"
				$('#games-list').html(text);
				$('#bag').removeClass('col-md-8');
				$('#summary').remove();
			}
		}
		$(document).on('click', '.removeGame', function () {
			var id = $(this).data('id');
			let allAdded = JSON.parse(localStorage.getItem('addedGame'));
			let afterRemoving = [];
			for(let game of allAdded){
				if(game.id != id){
					afterRemoving.push(game);
				}
			}
			if(afterRemoving.length){
				localStorage.setItem('addedGame', JSON.stringify(afterRemoving));
			}
			else{
				localStorage.removeItem('addedGame');
			}
			checkCartAmount();
			displayCart();
			getTotal();
		})
		$(document).on('click', '.quantityBtn', changeQuantity);
		function changeQuantity(){
			const minQuantity = 1;
			const maxQuantity = 100;
			const quantityData = $(this).data('quantity');
			const gameId = $(this).data('id');
			var games = JSON.parse(localStorage.getItem('addedGame'));
			if(quantityData == 'raise'){
				games.forEach((game) =>{
					if(gameId == game.id){
						if(game.quantity < maxQuantity){
							game.quantity++;
						}
					}
				})
			}
			else{
				games.forEach((game) => {
					if(gameId == game.id){
						if(game.quantity > minQuantity){
							game.quantity--;
						}
					}
				})
			}
			localStorage.setItem('addedGame', JSON.stringify(games));
			displayCart();
			getTotal();
		}
	}
	//endregion

	//region Ajax Call jQuery
	function getData(path, callback, storage){
		try{
			return new Promise( (resolve, reject) => {
				$.ajax({
					url : 'js/data/' + path + '.json',
					dataType : 'json',
					method : 'GET',
					success : (result) => {
						if(path == 'allGames'){
							resolve(allGames = result) //vrednosti ce sigurno i uvek biti u ovoj promenljivoj pomocu promise-a, potrebna za kasnije filtriranje
						}
						if(location.indexOf('single') != -1){
							var owl_single = $(".single");
							owl_single.owlCarousel(
								{
									items:1,
									loop : true,
									autoplay: true,
									mouseDrag: true,
									touchDrag: true,
									dots: true,
									nav: false,
									autoplayHoverPause: true
								}
							);
						}
						callback(result);
					},
					error : (xhr, status, err) => {
						reject(console.error(err));
						throw ('Greska pri dohvatanju podataka iz baze.');
					}
				})
			})
		}
		catch (e){
			console.error(e.message);
		}
	}
	function getCategories(callback, divId, storage, path)
	{
		try{
			$.ajax({
				url : "js/data/" + path +".json",
				method : "GET",
				dataType : "json",
				success : (result) => {
					storage = result;
					callback(allGames, storage, divId)
				},
				error : (xhr, status, error) => { console.error(error);}
			})
		}
		catch (e) {
			console.error(e);
		}

	};
	//endregion

	//region Window: resize & Document: scroll
	$(window).on('resize', function()
	{
		setHeader();
		if(location.indexOf("index") != -1 || location == "/Web_2_sajt/"){
			removePng();
		}
		if(location.indexOf("shop") != -1){
			filterResponsive();
		}
	});
	$(document).on('scroll', function()
	{
		setHeader();
	});
	//endregion
	$('#numberOfProducts').on("change", function (){
		let value = parseInt(this.value);
		changeNumber(value);
		displayStoreFirst(allGames);
	})
	function changeNumber(value){
		maxItemsStore = value;
	}
	function getDateString(game){
		let month, day, year, date;
		date = game;
		console.log(date)
		let dateSplit = date.split("-");
		day = dateSplit[2];
		year = dateSplit[0];
		switch(dateSplit[1]){
			case "01" : month = "Jan";break;
			case "02" : month = "Feb";break;
			case "03" : month = "Mar";break;
			case "04" : month = "Apr";break;
			case "05" : month = "May";break;
			case "06" : month = "Jun";break;
			case "07" : month = "Jul";break;
			case "08" : month = "Aug";break;
			case "09" : month = "Sep";break;
			case "10" : month = "Oct";break;
			case "11" : month = "Nov";break;
			case "12" : month = "Dec";break;
		}
		return {
			month : month,
			day : day,
			year : year
		}
	}
	//region Functions

	//region Homepage slider
	function displayHomeSlider(data){
		let content = '<div class="owl-carousel">';
		for(let game of data){
			let gameToGet = game.name.toLowerCase();
			if(gameToGet.indexOf('minecraft') != - 1 || gameToGet.indexOf('redemption ii') != -1 || gameToGet.indexOf('heat') != -1){
				content += `<div class="sliderTekst sliderImage">
						<div class="container fill_height">
						<div class="row align-items-center fill_height">
						<div class="col">
						<div class="main_slider_content">
						<h6>${getHeadline(game)}</h6>
						<h1>${game.name}</h1>
						<p>${getInfoText(game)}</p>
						<div class="red_button shop_now_button openSingle p-2" data-id="${game.id}"><a href="single.html">Buy ${game.name}</a></div>
						</div>
						</div>
						</div>
						</div>
						</div>`
			}
		}
		content += '</div>'
		$('#slider').html(content);
		let backImg = $('.sliderImage');
		for(let i = 0; i< backImg.length; i++){
			backImg[i].style.setProperty('--url', "url(\'../images/slider_"+  (i+1) + ".jpg\')");

		}
		console.log(backImg.length);
		owlDisplay();
	}
	function owlDisplay()
	{
		var owl = $('.owl-carousel');
		owl.owlCarousel(
			{
				items:1,
				loop : true,
				mouseDrag: false,
				touchDrag: false,
				dots: false,
			}
		);
		function progress(){
			$("#progressBar").css("width","0%");
			$("#progressBar").animate({
				width:"100%"
			},10000,"linear", () => {
				progress();
				owl.trigger('next.owl.carousel');
			});
		}
		progress();
	}
	function getHeadline(data){
		if(data.newRelease.value){
			return 'Available now!'
		}
		else if(data.price.discount.isDiscounted){
			return 'On sale!'
		}
		else{
			return 'Check out!'
		}
	}
	function getInfoText(data){
		let duzina = data.info.text.length;
		return data.info.text[0][1];
	}
	//endregion

	//region Display game item - homepage - store
	function displayGames(data, parent)
	{ // ispisivanje bloka sa igricom
		if(parent != "products"){
			$("#" + parent).addClass("row row-cols-2 row-cols-md-3 row-cols-lg-4 pl-0")
		}
		else{
			$("#" + parent).removeClass();
			$("#" + parent).addClass("row row-cols-2 row-cols-md-3")
			$("#" + parent).empty();

		}
		for(let game of data){
			let div = document.createElement("div");
			div.className = `card mb-3 col`;
			let favorite = document.createElement('div');
			let cart = document.createElement('i');
			cart.className = 'fas fa-cart-plus';
			favorite.appendChild(cart);
			favorite.setAttribute('data-id', game.id);
			favorite.setAttribute('data-toggle', 'tooltip');
			favorite.setAttribute('data-placement', 'top');
			favorite.setAttribute('title', 'Add to cart');
			favorite.className = 'favorite d-flex justify-content-center align-items-center';
			div.appendChild(favorite)
			let a = document.createElement("a");
			a.setAttribute("href","single.html");
			a.className = "openSingle";
			a.setAttribute("data-id", game.id)
			a.style.position = "relative";
			div.appendChild(a);
			if(game.price.discount.isDiscounted){
				let ribbon = document.createElement("div");
				ribbon.className = "ribbon";
				let span = document.createElement("span");
				span.innerHTML = "SALE!"
				ribbon.appendChild(span);
				a.appendChild(ribbon)
			}
			let image = document.createElement("img");
			image.setAttribute("src", game.image.cover);
			image.setAttribute("alt", game.name)
			image.className = "card-img-top";
			a.appendChild(image);
			let card = document.createElement("div");
			card.className = "card-body";
			a.appendChild(card)
			let h5 = document.createElement("h5");
			h5.textContent = game.name;
			h5.className = "card-title";
			card.appendChild(h5)
			let ul = document.createElement("ul");
			ul.className = "card-info";
			card.appendChild(ul)
			let li1 = document.createElement("li");
			li1.className = "text-muted developer"
			li1.textContent = game.info.about[0].value;
			ul.appendChild(li1)
			let li2 = document.createElement("li");
			li2.className = "price"
			li2.innerHTML = price(game, game.price.discount);
			ul.appendChild(li2)
			$("#" + parent).append(div)
			$('[data-toggle="tooltip"]').tooltip();
		}

	}
	//endregion

	//region Header
	function setHeader()
	{

			if($(window).scrollTop() > 100)
			{
				header.css({'top':"-50px"});
			}
			else
			{
				header.css({'top':"0"});
			}

		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	};
	//endregion

	//region Menu
	function initMenu()
	{
		if(hamburger.length)
		{
			hamburger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
			});
		}

		if(fsOverlay.length)
		{
			fsOverlay.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if(hamburgerClose.length)
		{
			hamburgerClose.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if($('.menu_item').length)
		{
			var items = document.getElementsByClassName('menu_item');
			var i;

			for(i = 0; i < items.length; i++)
			{
				if(items[i].classList.contains("has-children"))
				{
					items[i].onclick = () =>
					{
						this.classList.toggle("active");
						var panel = this.children[1];
						if(panel.style.maxHeight)
						{
							panel.style.maxHeight = null;
						}
						else
						{
							panel.style.maxHeight = panel.scrollHeight + "px";
						}
					}
				}
			}
		}
	};
	function openMenu()
	{
		menu.addClass('active');
		menu.css("box-shadow", "rgb(0 0 0 / 50%) 0px 0px 0px 10000px");
		fsOverlay.css('pointer-events', "auto");
		menuActive = true;
	};
	function closeMenu()
	{
		menu.removeClass('active');
		menu.css("box-shadow", "none");
		fsOverlay.css('pointer-events', "none");
		menuActive = false;
	};
	//endregion

	//region Remove png on smaller resolution - homepage
	function removePng()
	{
		if(window.innerWidth < 992){
			$(".deal_ofthe_week_img img").hide();
			$(".deal_ofthe_week").height("auto")
		}
		else{
			$(".deal_ofthe_week_img img").show();
		}
	};
	//endregion

	//region Homepage display sections
	function displayCountdown()
	{
		var countDownDate = new Date("April 1, 2021 00:00:00").getTime(); // do ovog dana da se vrsi odbrojavanje - uzima se broj milisekundi

		var x = setInterval(() => {
			var now = new Date().getTime(); //trenutno vreme u milisekundama
			var razlika = countDownDate - now; //
			var days = Math.floor(razlika / (1000 * 60 * 60 * 24));
			var hours = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((razlika % (1000 * 60)) / 1000);
			$("#day").html(days);
			$("#hour").html(hours);
			$("#minute").html(minutes);
			$("#second").html(seconds)
			if (razlika < 0) {
				clearInterval(x);
				$(".deal_ofthe_week_col").html("New deals coming soon!");
			}
		}, 1000);
	};
	function homepageGames(sectionId, data)
	{ // ispisivanje igrica

		if($(window).width() < 768 || $(window).width() >= 992){
			var maxItemsFirstRow = 4;
		}
		else{
			var maxItemsFirstRow = 3;
		}
		let counter = [];
		let firstRow = data.filter((game, index) => { // izvlacenje prvih 4 igrica
			if(counter.length < maxItemsFirstRow){
				if(sectionId == "newReleases"){
					return game.newRelease.value && counter.push(index);
				}
				else if(sectionId == "hotSales"){
					return game.price.discount.isDiscounted && counter.push(index);
				}
				else if(sectionId == "topSellers"){
					return game.otherId.includes(2) && counter.push(index);
				}
			}
		})
		displayGames(firstRow, sectionId);
	};
	function displayAllSections(result)
	{// ispisivanje svih sekcija na pocetnoj stranici
		homepageGames("newReleases", result);
		homepageGames("hotSales", result);
		homepageGames("topSellers", result);
	};
	//endregion

	//region Get price for game
	function price(item, discount)
	{
		if(!discount.isDiscounted){
			return `<i class="fas fa-euro-sign"></i>${item.price.value.netPrice}`
		}
		else{
			return `<span class="badge">-${item.price.discount.amount}%</span> <s class="text-muted"><i class="fas fa-euro-sign"></i>${item.price.value.listPrice}</s> <span><i class="fas fa-euro-sign"></i>${item.price.value.netPrice}</span>`
		}
	};
	//endregion

	//region Display store & checkboxes
	function displayCheckbox(games,data, div)
	{
		let display = "<div class='p-3'>";
		let amount ;
		try{
			for(let item of data){
				if(!data){
					throw ('Greska pri dohvatanju podataka.');
				}
				display += `<li class="d-flex align-items-center justify-content-start">
							<label for="${item.name.split(" ").join("")}" class="customChb w-100"> ${item.name}
								<input type="checkbox" id="${item.name.split(" ").join("")}" value="${item.id}" name=`
				if(div == "mode"){
					display += "modes"
					amount = games.filter(game => game.modes.includes(item.id));
				}
				else if(div == "categoryChb"){
					display += "category"
					amount = games.filter(game => game.catId.includes(item.id));
				}
				else{
					display += "other"
					amount = games.filter(game => game.otherId.includes(item.id));
				}
				display += `>
								<span class="checkmark"></span>
								<span class="amount">${amount.length}</span>
							</label>					
						</li>`
			};
			display += '</div>'
			$("#" + div).html(display);
		}
		catch (e) {
			console.error(e.message); // ako iz nekog razloga ne moze da dohvati vrednosti parametra games
		}

	};
	function displayStoreFirst(data)
	{
		data = filterSearch(data);
		data = filterPrice(data);
		data = filterCat(data);
		data = filterMode(data);
		data = filterOther(data);
		data = sortAll(data);
		let allItems = [];// ovde stavljamo niz igrica za svaku stranicu
		let pageNumber = 0;// od 0 brojimo stranice
		let brojStranica = Math.ceil(data.length / maxItemsStore); // dobijamo broj stranica na osnovu maksimalnog broja igrica po stranici
		for(let i = 0; i < brojStranica; i++){
			allItems.push([]);// prvo ubacujemo --nested-- niz onoliko puta koliko je ukupan broj stranica u koga kasnije ubacujemo maksimalni broj igrica za jednu stranicu, onda dobijamo igrice po svakoj stranici
			pageNumber++;// povecavamo broj stranica
			for(let x = 0; x < data.length; x++){
				if(x == (maxItemsStore * pageNumber)){ //  9 * 1 || 9 * 2 || 9 * 3 ----- ulazimo u if ako je index jednak maksimalnom broju igrica za odredjenu stranicu
					break; // izlaz
				}
				else if(x >= pageNumber * maxItemsStore - maxItemsStore){ // ako je index igrice veci ili jednak od prethodnog broja igrica racunajuci prethodne stranice
					allItems[i].push(data[x]) // ubacujemo igrice u nested array unutar allItems promenljive
				}
			}
		};
		if(allItems.length){
			displayPagination(allItems, brojStranica);
			displayGames(allItems[0], "products", ""); // uvek prikazujemo prvu stranicu
		}
		else{
			$("#pag").empty() // brisemo paginaciju ako nema igrica za prikaz
		}
		if(!data.length){
			displayNoResults(); // ispisujemo poruku korisniku da nema rezultata po njegovih kriterijuma
		}
	};
	//endregion
	//region Coming Soon section
	function displayComingSoon(data)
	{
		let content = "<div class='owl-carousel' id='coming-owl'>";
		for(let game of data){
			let date = getDateString(game.releaseDate);
			content += `<div class="soon_item_col">
							<div class="soon_item">
								<div class="soon_background" id="bg${game.id}"></div>
								<div class="soon_content d-flex flex-column align-items-center justify-content-center text-center">
									<img src="${game.image.logo.src}" class="img-fluid" alt="${game.image.logo.alt}">
									<h4 class="soon_title pt-3">Release Date: ${date.month} ${date.day}, ${date.year}</h4>
								</div>
							</div>
						</div>`;
		}
		content += "</div>"
		$(".coming-soon").html(content);
		for(let game of data){
			$("#bg" + game.id).css("background-image", "url(" + game.image.background.src + ")");
		}
		let coming = $("#coming-owl");
		coming.owlCarousel((
			{
				autoplay: true,
				mouseDrag: true,
				touchDrag: true,
				loop: true,
				dots: false,
				nav: false,
				stagePadding: 50,
				margin: 20,
				autoplayHoverPause: true,
				responsive : {
					0 : { items : 1},
					768 : { items : 2},
					992: { items : 3}
				}
			}
		))
	};
	//endregion

	//region Responsive filter section - store
	function filterResponsive()
	{
		if(window.innerWidth < 992){
			if(!$('#close').length){
				let close = `<div id="close" class="d-flex justify-content-center align-items-center p-3"><button type="button" id="closeFilter">Close filters</button> </div>`;
				$("#filter").prepend($(close));
			}
			$("#filter-small").html($("#filterBg"));
			$("#filter-wrapper").hide();
			$("#filter-wrapper").css({"background-color" : "#1d1d1d", 'box-shadow': "50px 0px 50px 1000px rgba(0,0,0,0.6)"});
			$("#filterBg").on("click", function(){
				$("#filter-wrapper").fadeIn();
			});
			$("#closeFilter").on("click", function(){
				$("#filter-wrapper").fadeOut();
			});
			$("#filter-wrapper").css({position : "fixed",top : "0", left: "0" , bottom : "0", "z-index" : "999", "overflow-y": "scroll"});
			$("#filterBg").on("mouseover", function(){
				$(this).css("cursor", "pointer");
			})
		}
		else{
			$('#close').remove();
			$("#filterBg").css("width", "100%");
			$("#filter").prepend($("#filterBg"))
			$("#filter-wrapper").show();
			$("#filter-wrapper").css({"background-color" : "transparent", 'box-shadow': "none"})
			$("#filter-wrapper").css({position : "relative", "z-index" : 1, "overflow-y" : "hidden"})
		}
	};
	//endregion

	//region Contact form - check
	function checkInputValues(input, errDiv ,regEx, ifIsEmptyErrorMsg, ifDidntPassRegExMsg){
		let val = false;
		let err;
		if(!input.value.length){
			err = ifIsEmptyErrorMsg;
			$(input).css('border', '2px solid #e21e21');
			$('.' + errDiv).html(err);
		}
		else{
			if(!regEx.test(input.value)){
				err = ifDidntPassRegExMsg;
				$(input).css('border', '2px solid #e21e21');
				$('.' + errDiv).html(err);
			}
			else{
				$(input).css('border', '2px solid green');
				$('.' + errDiv).html('');
				val = true;
			}
		}
		return val;
	} // for contact form
	//endregion

	//region Display modal
	function displayMessageModal(text){
		var modal;
		if(!$('#modal').length){
			modal = document.createElement('div'); // kreiram div u koji cu da smestam poruke
			modal.setAttribute('id', 'modal');
		}
		else{
			modal = document.getElementById('modal'); // ako postoji, onda ga dohvati
		}
		let message = document.createElement('div');
		message.setAttribute('id', 'message-modal');
		message.innerHTML = text;

		modal.appendChild(message);
		let footer = document.getElementsByTagName('footer');
		if($("#modal").length){
			modal.appendChild(message); // da ne dolazi do preklapanja poruka, vec da se ispisuju jedna ispod druge
		}else{
			$(modal).insertAfter(footer); // da ga postavim na kraju stranice
		}
		$(message).fadeIn();
		 let promise = new Promise((resolve, reject) => {  //promise da bih obrisao element nakon izvrsvanja fade out-a, simuliram asinhroni zahtev pomocu timeout
		 	setTimeout(() => {$(message).fadeOut(); resolve()}, 3000);
		 })
		 promise.then(() => { // cekamo izvrsavanje promise-a
		 	setTimeout(() => {// nakon sto je gotov promise, izvrsava se i brise element nakon jedne sekunde
		 		$(message).remove();
		 	}, 1000)
		 })
	}
	//endregion

	function checkCartAmount(){
		if(localStorage.getItem('addedGame')){
			let addedGames = JSON.parse(localStorage.getItem('addedGame'));
			$('#total-price').html(localStorage.getItem('total'));
			$('#checkout_items').html(addedGames.length); // ispisujemo broj igrica unetih u korpu, distinct, ne povecavamo broj ako igrica vec postoji u korpi, vec u drugoj funkciji povecavamo quantity
		}
		else{
			$('#checkout_items').html('0');
		}
	}

	function getTotal(){
		var total = 0;
		if(localStorage.getItem('addedGame')){
			let allGames = JSON.parse(localStorage.getItem('addedGame'));
				for(let game of allGames){
					total += game.quantity * game.price; // ukupna cena
				}
		}
		total = total.toFixed(2); // dve decimale
		$('#total-price').html(`<p>Your total:</p> <p class="price-final"><i class="fas fa-euro-sign"></i> ${total}</p>`);
	}
	function displayNav(data){
		let mainNav = '';
		let otherNav = '';
		for(let link of data){
			otherNav += `<li><a href="${link.link}">${link.name}</a></li>`
			if(link.id >= 4){
				continue;
			}
			mainNav += `<li><a href="${link.link}">${link.name}</a></li>`;
		}
		$(".navbar_menu").html(mainNav);
		$(".footer_nav").html(otherNav);
		$(".menu_top_nav").html(otherNav);
		$(".menu_top_nav").find("li").addClass('menu_item');
	}
	//endregion

	//region Single page product

	function displaySingle(allGames)
	{
		for(let item of allGames){
			if(item.id == localStorage.getItem("id")){
				document.title = "Game Hut - " + item.name;
				$("#name").append(item.name);
				$("#gameName").append(item.name);
				getLogoPriceSection(item.image.logo, item.name, item.price);
				getAbout(item.info.about, item.info.text)
				fillSystemReq("minimum", item.specifications.minimum);
				fillSystemReq("recommended", item.specifications.recommended);
				getScreenshots(item.image.gallery, item.name);
				var owl_single = $(".single");
				owl_single.owlCarousel(
					{
						items:1,
						loop : true,
						autoplay: true,
						mouseDrag: true,
						touchDrag: true,
						dots: true,
						nav: false,
						autoplayHoverPause: true
					}
				)
			}
		}
	};
	function getLogoPriceSection(logo, alt, price)
	{ //ispisivanje cene na single.html
		var logoDisplay = `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 px-5 px-sm-3">
						<img src="${logo}" class="img-fluid" alt="${alt}">
					</div>
					<div class="col-12 col-sm-6 col-md-8 col-lg-9 d-flex flex-column align-items-md-end align-items-center">`;
					if(!price.discount.isDiscounted){
						logoDisplay += `<div class="d-flex flex-column align-items-sm-end align-items-center">
											<button type="button" id="price" data-id="${localStorage.getItem('id')}" value="${price.value.netPrice}">Add to cart</button>
												<span id="current" class="pt-3">
													<i class="fas fa-euro-sign"></i>${price.value.netPrice}
												</span>	
										</div>`
					}
					else{
						logoDisplay +=`<div class="d-flex flex-column align-items-end">
											<button type="button" id="price" data-id="${localStorage.getItem('id')}" value="${price.value.netPrice}">Add to cart</button>
											<p class="d-flex justify-content-around align-items-center pt-3">
												<span class="badge badge-danger">-${price.discount.amount}%</span>
												<s class="pl-2 pr-2">
													<i class="fas fa-euro-sign "></i>${price.value.listPrice}
												</s> 
												<span id="current">
													<i class="fas fa-euro-sign"></i>${price.value.netPrice}
												</span>
											</p>	
										</div>`
					}
					logoDisplay += "</div>"
				$("#logo-game-container").append(logoDisplay);
	};
	function getAbout(about, textInfo)
	{//ispisivanje informacija o igrici na single.html
		var info = "";
		var text = "";
		for(let i in about){
			if(about[i].name.toLowerCase().indexOf('release') != -1){
				let date = getDateString(about[i].value);
				info += `<li>
						<h6>${about[i].name}</h6>
						<p>${date.month} ${date.day}, ${date.year}</p>
					</li>`
				continue;
			}
			info += `<li>
						<h6>${about[i].name}</h6>
						<p>${about[i].value}</p>
					</li>`
		}
		for(let i in textInfo){
			text += `<h6>${textInfo[i][0]}</h6>
						<p>${textInfo[i][1]}</p>`
		}
		$("#about").append(info);
		$("#infoText").append(text);
	};
	function getScreenshots(gallery, alt)
	{//ispisivanje dodatnih slika igrice na single.html
		var screenshots = "";
		screenshots = '<div class="owl-carousel single">';
		for (let i in gallery){
			screenshots += `<div class="item">
			<img src="${gallery[i]}" class="img-fluid" alt="${alt}">
		</div>`
		}
		screenshots += `</div`;
		$("#slika").append(screenshots);
	};
	function fillSystemReq(minOrRec, specifications)
	{//ispisivanje sistemskih zahteva na single.html
		for(let i in specifications){
			//create
			let li = document.createElement("li");
			let h6 = document.createElement("h6");
			h6.className = "text-muted";
			let h6Content = document.createTextNode(specifications[i].name);
			let p = document.createElement("p");
			let pContent = document.createTextNode(specifications[i].value);

			//appending
			li.appendChild(h6);
			h6.appendChild(h6Content);
			li.appendChild(p);
			p.appendChild(pContent);

			$("#" + minOrRec).append(li);
		}
	};
	$(document).on('click', '#price', sendToCart);
	$(document).on('click', '.favorite', sendToCart);
	function sendToCart(){
		var gameToAdd = [];
		if(localStorage.getItem('addedGame')){
			gameToAdd = JSON.parse(localStorage.getItem('addedGame'));
		}
		let gameId = $(this).data('id');
			for(let game of allGames){
				if(game.id == gameId){
					if(gameToAdd.some(x => x.id == gameId)) {
						gameToAdd.find(x => x.id == gameId).quantity++;
						displayMessageModal(`You have ${gameToAdd.find(x => x.id == gameId).quantity} <span>${game.name}'s </span> in your cart.`)
					}
					else{
						gameToAdd.push({
							id : game.id,
							image : game.image.logo,
							name : game.name,
							price : game.price.value.netPrice,
							quantity : 1
						})
						displayMessageModal(`You added <span>${game.name} </span> into your cart.`)
					}
					localStorage.setItem('addedGame', JSON.stringify(gameToAdd));
				}
			}
		checkCartAmount();
	}
	//endregion

	//region Filtering functions - Price - Categories - Mode - Other
	$("#search").on('keyup', function(){
		filtered = filterSearch(allGames)
		displayStoreFirst(filtered)
	})
	function filterSearch(data){
		let search = document.getElementById('search');
		let text = search.value.trim().toLowerCase();
		if(search.value.length){
			data = data.filter((game) => {
				if(game.name.toLowerCase().indexOf(text) != -1){
					return game;
				}
			})
		}
		return data;
	}
	$("#priceFrom").on("input", getRangeValue("#from", "#priceFrom"));
	$("#priceTo").on("input", getRangeValue("#to", "#priceTo"));

	function filterPrice(data)
	{
		return data.filter(game => Math.floor(game.price.value.netPrice) < priceTo && Math.ceil(game.price.value.netPrice) > priceFrom);
	};
	function getRangeValue(output, value)
	{
		$('#priceTo').on('mouseup', function (){
			filtered = filterPrice(allGames);
			displayStoreFirst(filtered);
		})
		$('#priceFrom').on('mouseup', function (){
			filtered = filterPrice(allGames);
			displayStoreFirst(filtered);
		})
		return  () => {
			$(output).val($(value).val());
			if (output == "#from") {
				priceFrom = $(value).val();
			} else {
				priceTo = $(value).val();
			}
		}
	};
	function removeUnchecked(array, value)
	{
		var index = array.indexOf(value);	// dohvatanje indeksa elementa koji je unchecked u nizu
		if(index != -1){	// ako se nalazi u nizu
			array.splice(index, 1) // uklanjanje tog elementa
		}
	};

	function filterCat(data)
	{
		if(checkedCat.length){
			filtered = data.filter(game => checkedCat.some(checked => game.catId.includes(checked)));
		}
		else{
			filtered = data;
		}
		return filtered;
	};
	function filterMode(data)
	{
		if(checkedMode.length){
			filtered = data.filter(game => checkedMode.some(checked => game.modes.includes(checked)));
		}
		else{
			filtered = data;
		}
		return filtered;
	};
	function filterOther(data)
	{
		if(checkedOther.length){
			filtered = data.filter(game => checkedOther.some(checked => game.otherId.includes(checked)));
		}
		else{
			filtered = data;
		}
		return filtered;
	};
	$(document).on('change', ':checkbox', function(){
		let name = this.getAttribute('name');
		if(name.indexOf('category') != -1){
			checkboxFilter(this, checkedCat, filterCat);
		}
		else if(name.indexOf('modes') != -1){
			checkboxFilter(this, checkedMode, filterMode);
		}
		else{
			checkboxFilter(this, checkedOther, filterOther);
		}
	})
	function checkboxFilter(checkbox, array, filterArray){
		let value = parseInt($(checkbox).val());
		if($(checkbox).is(":checked")){
			array.push(value);
		}
		else{
			removeUnchecked(array, value);
		}
		filtered = filterArray(allGames);
		displayStoreFirst(filtered)
	}
	//endregion

	//region Open single page
	$(document).on("click", ".openSingle",function()
	{
		localStorage.setItem("id",($(this).attr("data-id")));
		open("single.html", "_self");
	});
	//endregion

	//region Rotate Font Awesome icon
	$(document).on("click", "#filterCat", rotateHandler("#categoryChb", "#filterCat"));
	$(document).on("click", "#priceToggle", rotateHandler("#priceRange", "#priceToggle"));
	$(document).on("click", "#more-filters", rotateHandler("#mode", "#more-filters"));
	$(document).on("click", "#filter-other", rotateHandler("#otherFilter", "#filter-other"));

	function rotateHandler(button, div)
	{
		return () => {
			$(button).slideToggle();
			if(div == "#filterCat"){
				degreesCat += 180;
				$(div).find(".fas").css("transform", "rotate(" + degreesCat + "deg)");
			}
			else if(div == "#priceToggle"){
				degreesPrice += 180;
				$(div).find(".fas").css("transform", "rotate(" + degreesPrice + "deg)");
			}
			else if(div == "#more-filters"){
				degreesMore += 180;
				$(div).find(".fas").css("transform", "rotate(" + degreesMore + "deg)");
			}
			else{
				degreesOther += 180;
				$(div).find(".fas").css("transform", "rotate(" + degreesOther + "deg)");
			}
			
		}
	};
	//endregion

	//region Sorting - Store
	$(document).on("change", "#sort", function()
	{
		filtered = sortAll(allGames);
		displayStoreFirst(filtered)
	});
	function sortByNameAZ(data)
	{
		return data.sort((a,b) =>{
			var nameA = a.name.toLowerCase();
			var nameB = b.name.toLowerCase();
			if(nameA < nameB){
				return -1;
			}
			else if(nameA > nameB){
				return 1;
			}
			return 0;
		})
	};
	function sortByNameZA(data)
	{
		return data.sort((a,b) => {
			var nameA = a.name.toLowerCase();
			var nameB = b.name.toLowerCase();
			if(nameA < nameB){
				return 1;
			}
			else if(nameA > nameB){
				return -1;
			}
			return 0;
		})
	}
	function sortByPriceHighLow(data)
	{
		return data.sort((a,b) =>{
			var priceA;
			var priceB;
			priceA = Math.round(a.price.value.netPrice);
			priceB = Math.round(b.price.value.netPrice);
			
			if(priceA < priceB){
				return 1;
			}
			else if(priceA > priceB){
				return -1;
			}
			return 0;
		})
	}
	function sortByPriceLowHigh(data)
	{
		return data.sort((a,b) =>{
			var priceA;
			var priceB;
			priceA = Math.round(a.price.value.netPrice);
			priceB = Math.round(b.price.value.netPrice);
			
			if(priceA < priceB){
				return -1;
			}
			else if(priceA > priceB){
				return 1;
			}
			return 0;
		})
	}
	function sortAll(data)
	{
		let value = $("#sort").val();
		if(value == 'nameASC'){
			return sortByNameAZ(data);
		}
		else if(value == 'nameDESC'){
			return sortByNameZA(data);
		}
		else if(value == 'priceDESC'){
			return sortByPriceHighLow(data);
		}
		else if(value == 'priceASC'){
			return sortByPriceLowHigh(data);
		}
		else{
			return data;
		}
	}
	//endregion

	//region Pagination - Store
	function displayPagination(allPages, numberOfPages)
	{
		if(allPages.length){
			let display = `<ul class="d-flex flex-row" id="pagination">`;
			for(let i = 0; i < numberOfPages; i++){
				display += `<li class="pagination-item mr-2`;
				if(i == 0){
					display+=" active-pag";
				}
				display += `" id="pag-${i + 1}">${i + 1}</li>`
			}
			display += "</ul>";
			$("#pag").html(display);
		}			
		
		$(".pagination-item").on("click", function(){
			let pag = document.getElementsByClassName('pagination-item');
			for(let i = 0; i < pag.length; i++){
				if(this.id == pag[i].id){
					displayGames(allPages[i], 'products');
					$(".pagination-item").removeClass("active-pag")
					$(this).addClass("active-pag")
				}
			}
		})
		
	};
	//endregion

	//region Display no results - Store
	function displayNoResults()
	{
		$("#products").removeClass("row-cols-1 row-cols-sm-2 row-cols-md-3");
			$("#products").addClass("d-flex align-items-center justify-content-center h-100");
			var msg = `<div id="noMatch" class="pb-5 pb-md-0">
							<i class="far fa-frown pb-3"></i>
							<p>No results found</p>	
							<span>Unfortunately I could not find any results matching your search.</span>	   
						</div>`;
			$("#products").html(msg);
	}
	//endregion

	//region Global RegEx

	const mailReg =  /^[a-z][a-z.\d-_]+@[a-z]+(\.[a-z]+)+$/; // potreban za newsletter na svakoj strani i contact stranicu

	//endregion

	//region Newslettter
	const newsletterForm = document.getElementById('newsletter_form');
	const newsletter = document.getElementById('newsletter_email');
	var correctNewsletter = false;
	newsletter.onchange = ()=>{
		checkInputValues(newsletter, 'newsletterErr', mailReg, 'Newsletter email cannot be empty', 'Mail is not in a good format. (E.q: johndoe5@gmail.com)');
	};
	newsletterForm.onsubmit =  (e)=>{
		e.preventDefault();
		correctNewsletter = checkInputValues(newsletter, 'newsletterErr', mailReg, 'Newsletter email cannot be empty', 'Mail is not in a good format. (E.q: johndoe5@gmail.com)');
		if(correctNewsletter){
			setNewsletterCookie('newsletter', newsletter.value, 6);
		}
	};
	function checkCookieNewsletter(){
		let cookie = document.cookie.split("; "); //dohvatamo kolacice vezane za newsletter mejlove
		let values = [];
		for(let newsletter of cookie){
			if(newsletter.includes('newsletter')){
				values.push(newsletter.split('=')[1]);
			}
		}
		if(cookie){ //ako postoje
			for(let x of values){
				if(!news.includes(x)){
					news.push(x); // ubacujemo vrednosti kolacica koje vec ne postoje u nizu
				}
			}
		}
	}


	//endregion

	//region Set newsletter cookie function
	function setNewsletterCookie(name, value, duration){
		checkCookieNewsletter();
		let date = new Date();
		date.setMonth(date.getMonth() + duration);
		let cookie = document.cookie.split("; ").find(val => val.startsWith(name + '='));
		if(cookie) {
			if(news.length){
				if(news.includes(value)){
					displayMessageModal('Oops. Looks like you are already subscribed to our newsletter.');
				}
				else{
					if(value.length){
						if(!news.includes(value)){
							news.push(value);
						}
					}
					displayMessageModal('You have successfully subscribed to our newsletter.');
					for(let i = news.length - 1; i < news.length; i++){
						document.cookie = `${name}${i}=${news[i]}; expires=${date.toUTCString()}; secure`;
					}

				}
			}
		}
		else{
			document.cookie = `${name}=${value}; expires=${date.toUTCString()}; secure`;
			displayMessageModal('You have successfully subscribed to our newsletter.');
		}
	}
	//endregion

	//region cookie accept
	let cookieAccept = document.getElementById('cookie-accept');
	cookieAccept.onclick = () => {
		localStorage.setItem('cookies', 'accepted');
		$('#cookie-wrapper').fadeOut();
	}
	if(localStorage.getItem('cookies')){
		$('#cookie-wrapper').remove();
	}
	else{
		$('#cookie-wrapper').css('display', 'block');
	}
	//endregion

});