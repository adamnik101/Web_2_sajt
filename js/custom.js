$(document).ready(function()
{
	$(window).on('load',function(){
		$('.loader-wrapper').fadeOut();
	})
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
	//endregion

	//region Page location
	if(location.indexOf("index") !== -1 || location == "/gamehut/")
	{
		displayCountdown();
		getGames(displayAllSections);
		owlDisplay();
		getUpcoming(displayComingSoon);
		removePng();
	}
	else if(location.indexOf("single") !== -1)
	{
		var games;
		getSingle();
	}
	else if(location.indexOf("categories") !== -1)
	{
		initShop();
		function initShop(){
			getGames(displayStoreFirst);
			getCategories(displayCheckbox, "categoryChb", categories, "categories");
			getCategories(displayCheckbox, "mode", modes, "modes");
			getCategories(displayCheckbox, "otherFilter", otherFilters, "otherFilters");
			getUpcoming(displayComingSoon);
			filterResponsive();
		}
	}
	else if(location.indexOf("contact") !== -1){
		const form = document.getElementById('contact');
		const fullName = document.getElementById('input_name');
		const mail = document.getElementById('input_email');
		const subject = document.getElementById('input_subject')
		const message = document.getElementById('input_message');
		var correctName = false, correctMail = false, correctSubject = false, correctMessage = false;

		const fullNameReg = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZČĆŽŠĐ][a-zšđčćž]{2,19})+$/;
		const subjectReg = /^[A-ZŠĐČĆŽ][a-zA-Z0-9-_ ]+$/;
		const messageLength = 20;

		fullName.onchange = function(){
			checkInputValues(fullName, 'name', fullNameReg, 'Name cannot be empty.', 'First name/last name must start with capital letter');
		};
		mail.onchange = function(){
			checkInputValues(mail, 'mail', mailReg, 'Mail cannot be empty.', 'Mail is not in a good format. (E.q: johndoe5@gmail.com)');
		};
		subject.onchange = function(){
			checkInputValues(subject, 'subject', subjectReg, 'Subject cannot be empty.', 'Subject must start with capital letter.');
		};
		message.onchange = function(){
			checkMessage();
		};
		form.onsubmit = function(event){
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
		function setMessageCookie(name, value, duration){
			let date = new Date();
			date.setUTCHours(date.getUTCHours() + duration);
			document.cookie = `${name}=${value}; expires=${date.toUTCString()}; secure`
			document.cookie = `msgTime=${date.toUTCString()}; expires=${date.toUTCString()}; secure`
		}
		function checkMessageCookie(){
			let cookie = document.cookie.split('; ').find(message => message.startsWith('message'));
			if(cookie){
				let msgTime = document.cookie.split('; ').find(message => message.startsWith('msgTime'));
				console.log(msgTime)
				let date = new Date(msgTime.split('=')[1]);
				let now = new Date();
				let difference = date.getTime() - now.getTime();
				let minutesLeft = Math.round(difference / 60000);
				console.log(minutesLeft)
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
			                                <img src="${game.image}" alt="${game.name}" class="img-fluid">
			                            </div>
			                            <div class="col-12 col-sm-8 col-md-9 d-flex flex-column ">
				                            <div class="cart-item-name d-flex justify-content-start flex-row">
				                                <p class="m-0">Name:</p><h5 class="ml-2 game-name">${game.name}</h5>
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
				$('#games-list').html("<li class='my-2'><div class=\"cart-item col-12 pt-4\"><h5>You have no games added into your cart.</h5></div></li>");
			}
		}
		$(document).on('click', '.removeGame', function(){
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

				games.forEach(function(game){
					if(gameId == game.id){
						if(game.quantity < maxQuantity){
							game.quantity++;
						}
					}
				})
			}
			else{
				games.forEach(function(game){
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
	function getGames(callback)
	{
		$.ajax({
			url: "js/data/allGames.json",
			type: "GET",
			dataType: "json",
			success: function(result){
				allGames = result;
				callback(result);
			},
			error: function(xhr,status, error) { console.log(error); }
		});
	};
	function getCategories(callback, divId, storage, path)
	{
		$.ajax({
			url : "js/data/" + path +".json",
			type : "GET",
			dataType : "json",
			success : function(result){
				storage = result;
				callback(storage, divId)
			},
			error : function(xhr, status, error) { console.log(error); }

		})
	};
	function getUpcoming(callback)
	{
		$.ajax({
			url : "js/data/comingSoon.json",
			type : "GET",
			dataType : "json",
			success : callback,
			error : function(xhr, status, err){ console.log(err)}
		})
	};
	//endregion

	//region Window: resize & Document: scroll
	$(window).on('resize', function()
	{
		setHeader();
		if(location.indexOf("index") != -1 || location == "/Web_2_sajt/"){
			removePng();
		}
		if(location.indexOf("categories") != -1){
			filterResponsive();
		}
	});
	$(document).on('scroll', function()
	{
		setHeader();
	});
	//endregion

	//region Functions

	//region Homepage slider
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
			},10000,"linear",function () {
				progress();
				owl.trigger('next.owl.carousel');
			});
		}
		progress();
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
			let a = document.createElement("a");
			a.setAttribute("href","#!");
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
			if(parent != "products"){
				$("#" + parent).append(div)
			}
			else{
				$("#" + parent).append(div)
			}
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
					items[i].onclick = function()
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

		var x = setInterval(function() {
			var now = new Date().getTime(); //trenutno vreme
			var razlika = countDownDate - now;
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
		let firstRow = data.filter(function(game, index){ // izvlacenje prvih 4 igrica
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
		displayGames(firstRow, sectionId); // ispisivanje prvog reda
	};
	function displayAllSections(result)
	{// ispisivanje svih sekcija na pocetnoj stranici + funkcije za dinamicko menjanje teksta ~ ellipsis
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
	function displayCheckbox(data, div)
	{
		let display = "<div class='p-3'>";
		let amount;
		for(let item of data){
			display += `<li class="d-flex align-items-center justify-content-start">
							<label for="${item.name.split(" ").join("")}" class="customChb w-100"> ${item.name}
								<input type="checkbox" id="${item.name.split(" ").join("")}" value="${item.id}" name=`
			if(div == "mode"){
				display += "modes"
				amount = allGames.filter(game => game.modes.includes(item.id));
			}
			else if(div == "categoryChb"){
				display += "category"
				amount = allGames.filter(game => game.catId.includes(item.id));
			}
			else{
				display += "other"
				amount = allGames.filter(game => game.otherId.includes(item.id));
			}
			display += `>
								<span class="checkmark"></span>
								<span class="amount">${amount.length}</span>
							</label>					
						</li>`
		};
		display += '</div>'
		$("#" + div).html(display);
	};
	function displayStoreFirst(data)
	{
		data = filterPrice(data);
		data = filterCat(data);
		data = filterMode(data);
		data = filterOther(data);
		data = sortAll(data);
		let otherPages = [];
		let currentPage = [];
		var items = data.filter(function(game){
			if(currentPage.length < maxItemsStore){
				return currentPage.push(game)
			}
			else{
				otherPages.push(game);
			}
		});
		displayGames(items, "products", "")
		if(currentPage.length <= maxItemsStore && currentPage.length > 0){
			displayPagination(otherPages, currentPage);
		}
		else{
			$("#pag").empty()
		}
		if(!data.length){
			displayNoResults();
		}
	};
	//endregion

	//region Coming Soon section
	function displayComingSoon(data)
	{
		let content = "<div class='owl-carousel' id='coming-owl'>";
		for(let game of data){
			let month, day, year;
			let date = game.releaseDate;
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
			content += `<div class="soon_item_col">
							<div class="soon_item">
								<div class="soon_background" id="bg${game.id}"></div>
								<div class="soon_content d-flex flex-column align-items-center justify-content-center text-center">
									<img src="${game.image.logo.src}" class="img-fluid" alt="${game.image.logo.alt}">
									<h4 class="soon_title pt-3">Release Date: ${month} ${day}, ${year}</h4>
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
					576 : { items : 2},
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
			let header = "<button type='button' id='closeFilter'>Close filters</button>";
			$("#filter-header").html(header);
			$("#filterBg").css("width", "150%");
			$("#filter-small").html($("#filterBg"));
			$("#filter-wrapper").hide();
			$("#filter-wrapper").css("background-color", "#1d1d1d");
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
			$("#filter-header").html("");
			$("#filterBg").css("width", "100%");
			$("#filter").prepend($("#filterBg"))
			$("#filter-wrapper").show();
			$("#filter-wrapper").css("background-color", "transparent")
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
		let modal = document.createElement('div');
		modal.setAttribute('id', 'message-modal');
		let footer = document.getElementsByTagName('footer');
		modal.innerHTML = text;
		$(modal).insertAfter(footer);
		$(modal).fadeIn();
		let promise = new Promise(function(resolve, reject){  //promise da bih obrisao element nakon izvrsvanja fade out-a
			setTimeout(function(){$(modal).fadeOut(); resolve()}, 5000);
		})
		promise.then(function(){ // cekamo izvrsavanje promise-a
			setTimeout(function(){// nakon sto je gotov promise, izvrsava se i brise element nakon jedne sekunde
				$(modal).remove();
			}, 1000)
		})
	}
	//endregion

	function checkCartAmount(){
		if(localStorage.getItem('addedGame')){
			let addedGames = JSON.parse(localStorage.getItem('addedGame'));
			$('#total-price').html(localStorage.getItem('total'));
			$('#checkout_items').html(addedGames.length);
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
					total += game.quantity * game.price;
				}
		}
		total = total.toFixed(2);
		$('#total-price').html(`<p>Your total:</p> <p class="price-final"><i class="fas fa-euro-sign"></i> ${total}</p>`);
	}
	//endregion

	//region Single page product
	function getSingle()
	{//funkcija za dohvatanje podataka o igrici + owl-carousel za single.html
		$.ajax({
			url : "js/data/allGames.json",
			type : "GET",
			dataType : "json",
			success : function(result){
				displaySingle(result);
				games = result;
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
			},
			error: function(xhr,status, error) { console.log(error); }
		});
	};
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
		var logoDisplay = `<div class="col-3">
						<img src="${logo}" class="img-fluid" alt="${alt}">
					</div>
					<div class="col-9 d-flex flex-column align-items-end">`;
					if(!price.discount.isDiscounted){
						logoDisplay += `<div class="d-flex flex-column align-items-end">
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
	function sendToCart(){
		var gameToAdd = [];
		if(localStorage.getItem('addedGame')){
			gameToAdd = JSON.parse(localStorage.getItem('addedGame'));
			console.log(gameToAdd)
		}
		let gameId = $(this).data('id');
			for(let game of games){
				if(game.id == gameId){
					if(gameToAdd.some(x => x.id == gameId)) {
						gameToAdd.find(x => x.id == gameId).quantity++;
						displayMessageModal(`You have ${gameToAdd.find(x => x.id == gameId).quantity} <i>${game.name}'s </i> in your cart.`)
					}
					else{
						gameToAdd.push({
							id : game.id,
							image : game.image.logo,
							name : game.name,
							price : game.price.value.netPrice,
							quantity : 1
						})
						displayMessageModal(`You added <i>${game.name} </i> into your cart.`)
					}
					localStorage.setItem('addedGame', JSON.stringify(gameToAdd));
				}
			}
		checkCartAmount();
	}
	//endregion

	//region Filtering functions - Price - Categories - Mode - Other
	$("#priceFrom").on("input", getRangeValue("#from", "#priceFrom"));
	$("#priceTo").on("input", getRangeValue("#to", "#priceTo"));

	function filterPrice(data)
	{
		return data.filter(game => Math.floor(game.price.value.netPrice) < priceTo && Math.ceil(game.price.value.netPrice) > priceFrom);
	};
	function getRangeValue(output, value)
	{
		return function () {
			$(output).val($(value).val());
			if (output == "#from") {
				priceFrom = $(value).val();
			} else {
				priceTo = $(value).val();
			}
			filtered = filterPrice(allGames);
			displayStoreFirst(filtered)
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
	$(document).on("change", ":checkbox[name='category']", function()
	{
		let value = parseInt($(this).val());
		if($(this).is(":checked")){
			checkedCat.push(value);
		}
		else{
			removeUnchecked(checkedCat, value);
		}
		filtered = filterCat(allGames);
		displayStoreFirst(filtered)
	});
	$(document).on("change", ":checkbox[name='modes']", function()
	{
		let value = parseInt($(this).val());
		if($(this).is(":checked")){
			checkedMode.push(value);
		}
		else{
			removeUnchecked(checkedMode, value);
		}
		filtered = filterMode(allGames);
		displayStoreFirst(filtered)
	});
	$(document).on("change", ":checkbox[name='other']", function()
	{
		let value = parseInt($(this).val());
		if($(this).is(":checked")){
			checkedOther.push(value);
		}
		else{
			removeUnchecked(checkedOther, value);
		}
		filtered = filterOther(allGames);
		displayStoreFirst(filtered)
	});
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
		return function(){
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
		return data.sort(function(a,b){
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
		return data.sort(function(a,b){
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
		return data.sort(function(a,b){
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
		return data.sort(function(a,b){
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
		if(value == 1){
			return sortByNameAZ(data);
		}
		else if(value == 2){
			return sortByNameZA(data);
		}
		else if(value == 3){
			return sortByPriceHighLow(data);
		}
		else if(value == 4){
			return sortByPriceLowHigh(data);
		}
		else{
			return data;
		}
	}
	//endregion

	//region Pagination - Store
	function displayPagination(otherPages, currentPage)
	{
		let allItems = [], another;
		if(otherPages.length > maxItemsStore){
			another = otherPages.slice(maxItemsStore);
			otherPages.splice(maxItemsStore, maxItemsStore * 2);
		}
		allItems.push(currentPage, otherPages, another);
		
		if(allItems.length){
			let display = `<ul class="d-flex flex-row" id="pagination">`;
			for(let i = 0; i < allItems.length; i++){
					if(allItems[i] != undefined && allItems[i].length > 0){
						display += `<li class="pagination-item mr-2`;
							if(i == 0){
								display+=" active-pag";
							}
							display += `" id="pag-${i + 1}">${i + 1}</li>`
						}
			}
			display += "</ul>";
			$("#pag").html(display);
		}			
		
		$(".pagination-item").on("click", function(){
			if(this.id == "pag-1"){
				displayGames(currentPage, "products", "")
					$(".pagination-item").removeClass("active-pag")
					$(this).addClass("active-pag")
			}
			else if(this.id == "pag-2"){
				$(".pagination-item").removeClass("active-pag")
				$(this).addClass("active-pag");
				displayGames(otherPages, "products", "")
			}
			else{
				$(".pagination-item").removeClass("active-pag")
				$(this).addClass("active-pag");
				displayGames(another, "products", "")
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

	const mailReg =  /^[a-z][a-z.\d-_]+@[a-z]+(\.[a-z]+)+$/;

	//endregion

	//region Newslettter
	const newsletterForm = document.getElementById('newsletter_form');
	const newsletter = document.getElementById('newsletter_email');
	var correctNewsletter = false;
	newsletter.onchange = function(){
		checkInputValues(newsletter, 'newsletterErr', mailReg, 'Newsletter email cannot be empty', 'Mail is not in a good format. (E.q: johndoe5@gmail.com)');
	};
	newsletterForm.onsubmit = function (e){
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
			console.log(news)
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

	let cookieAccept = document.getElementById('cookie-accept');
	cookieAccept.onclick = function(){
		localStorage.setItem('cookies', 'accepted');
		$('#cookie-wrapper').fadeOut();
	};
	if(localStorage.getItem('cookies')){
		$('#cookie-wrapper').remove();
	}
	else{
		$('#cookie-wrapper').css('display', 'block');
	}
});