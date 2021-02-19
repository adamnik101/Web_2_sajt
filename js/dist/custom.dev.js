"use strict";

jQuery(document).ready(function () {
  "use strict"; // Global

  var header = $('.header');
  var hamburger = $('.hamburger_container');
  var menu = $('.hamburger_menu');
  var menuActive = false;
  var hamburgerClose = $('.hamburger_close');
  var fsOverlay = $('.fs_menu_overlay');
  var location = window.location.pathname;
  var allGames, categories, modes, otherFilters;
  setHeader();
  initMenu();
  removePng();

  function getGames(callback) {
    $.ajax({
      url: "js/data/allGames.json",
      type: "GET",
      dataType: "json",
      success: function success(result) {
        allGames = result;
        callback(result);
      },
      error: function error(xhr, status, _error) {
        console.log(_error);
      }
    });
  }

  ;

  function getCategories(callback, divId, storage, path) {
    $.ajax({
      url: "js/data/" + path + ".json",
      type: "GET",
      dataType: "json",
      success: function success(result) {
        storage = result;
        callback(storage, divId);
      },
      error: function error(xhr, status, _error2) {
        console.log(_error2);
      }
    });
  }

  ;

  function getUpcoming(callback) {
    $.ajax({
      url: "js/data/comingSoon.json",
      type: "GET",
      dataType: "json",
      success: callback,
      error: function error(xhr, status, err) {
        console.log(err);
      }
    });
  }

  if (location.indexOf("index") != -1 || location == "/web-2/") {
    displayCountdown();
    getGames(displayAllSections);
    owlDisplay();
    getUpcoming(displayComingSoon);
  } else if (location.indexOf("single") != -1) {
    getSingle();
  } else if (location.indexOf("categories") != -1) {
    getGames(displayStoreFirst);
    getCategories(displayCheckbox, "categoryChb", categories, "categories");
    getCategories(displayCheckbox, "mode", modes, "modes");
    getCategories(displayCheckbox, "otherFilter", otherFilters, "otherFilters");
    getUpcoming(displayComingSoon);
    filterResponsive();
  }

  $(window).on('resize', function () {
    setHeader();

    if (location.indexOf("index") != -1 || location == "/web-2/") {
      truncateText();
      removePng();
    }

    if (location.indexOf("categories") != -1) {
      filterResponsive();
      truncateText();
    }
  });
  $(document).on('scroll', function () {
    setHeader();
  });

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.css({
        'top': "-50px"
      });
    } else {
      header.css({
        'top': "0"
      });
    }

    if (window.innerWidth > 991 && menuActive) {
      closeMenu();
    }
  }

  var minPx = 160;
  var medPx = 185;
  var cutTo = 10;
  var savedText = [];

  function getText() {
    var text = $(".card-title");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;
        savedText.push(i.innerHTML);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function truncateText() {
    var text = $(".card-title");

    if (text.width() < minPx) {
      for (var i = 0; i < text.length; i++) {
        if (savedText[i].length > 15) {
          var newText = savedText[i].substring(0, cutTo + 4);
          text[i].innerHTML = newText + "...";
        }
      }
    } else if (text.width() > minPx && text.width() < medPx) {
      for (var _i = 0; _i < text.length; _i++) {
        if (savedText[_i].length > 18) {
          var _newText = savedText[_i].substring(0, cutTo + 10);

          text[_i].innerHTML = _newText + "...";
        }
      }
    } else {
      for (var _i2 = 0; _i2 < text.length; _i2++) {
        text[_i2].innerHTML = savedText[_i2];
      }
    }
  }

  function removePng() {
    if (window.innerWidth < 992) {
      $(".deal_ofthe_week_img img").hide();
      $(".deal_ofthe_week").height("auto");
    } else {
      $(".deal_ofthe_week_img img").show();
    }
  }

  function initMenu() {
    if (hamburger.length) {
      hamburger.on('click', function () {
        if (!menuActive) {
          openMenu();
        }
      });
    }

    if (fsOverlay.length) {
      fsOverlay.on('click', function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }

    if (hamburgerClose.length) {
      hamburgerClose.on('click', function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }

    if ($('.menu_item').length) {
      var items = document.getElementsByClassName('menu_item');
      var i;

      for (i = 0; i < items.length; i++) {
        if (items[i].classList.contains("has-children")) {
          items[i].onclick = function () {
            this.classList.toggle("active");
            var panel = this.children[1];

            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          };
        }
      }
    }
  }

  function openMenu() {
    menu.addClass('active');
    menu.css("box-shadow", "rgb(0 0 0 / 50%) 0px 0px 0px 10000px");
    fsOverlay.css('pointer-events', "auto");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass('active');
    menu.css("box-shadow", "none");
    fsOverlay.css('pointer-events', "none");
    menuActive = false;
  }

  function displayCountdown() {
    var countDownDate = new Date("April 1, 2021 00:00:00").getTime(); // do ovog dana da se vrsi odbrojavanje - uzima se broj milisekundi

    var x = setInterval(function () {
      var now = new Date().getTime(); //trenutno vreme

      var razlika = countDownDate - now;
      var days = Math.floor(razlika / (1000 * 60 * 60 * 24));
      var hours = Math.floor(razlika % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(razlika % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(razlika % (1000 * 60) / 1000);
      $("#day").html(days);
      $("#hour").html(hours);
      $("#minute").html(minutes);
      $("#second").html(seconds);

      if (razlika < 0) {
        clearInterval(x);
        $(".deal_ofthe_week_col").html("New deals coming soon!");
      }
    }, 1000);
  }

  function displayGames(data, parent, animation) {
    // ispisivanje bloka sa igricom
    if (parent != "products") {
      $("#" + parent).addClass("row row-cols-2 row-cols-md-3 row-cols-lg-4 pl-0");
    } else {
      $("#" + parent).removeClass();
      $("#" + parent).addClass("row row-cols-2 row-cols-md-3");
      $("#" + parent).empty();
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var game = _step2.value;
        var div = document.createElement("div");
        div.className = "card mb-3 col".concat(animation);
        var a = document.createElement("a");
        a.setAttribute("href", "#!");
        a.className = "openSingle";
        a.setAttribute("id", game.id);
        a.style.position = "relative";
        div.appendChild(a);

        if (game.price.discount.isDiscounted) {
          var ribbon = document.createElement("div");
          ribbon.className = "ribbon";
          var span = document.createElement("span");
          span.innerHTML = "SALE!";
          ribbon.appendChild(span);
          a.appendChild(ribbon);
        }

        var image = document.createElement("img");
        image.setAttribute("src", game.image.cover);
        image.setAttribute("alt", game.name);
        image.className = "card-img-top";
        a.appendChild(image);
        var card = document.createElement("div");
        card.className = "card-body";
        a.appendChild(card);
        var h5 = document.createElement("h5");
        h5.textContent = game.name;
        h5.className = "card-title";
        card.appendChild(h5);
        var ul = document.createElement("ul");
        ul.className = "card-info";
        card.appendChild(ul);
        var li1 = document.createElement("li");
        li1.className = "text-muted developer";
        li1.textContent = game.info.about[0].value;
        ul.appendChild(li1);
        var li2 = document.createElement("li");
        li2.className = "price";
        li2.innerHTML = price(game, game.price.discount);
        ul.appendChild(li2);

        if (parent != "products") {
          $("#" + parent).append(div);
        } else {
          $("#" + parent).append(div);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function price(item, discount) {
    if (!discount.isDiscounted) {
      return "<i class=\"fas fa-euro-sign\"></i>".concat(item.price.value.netPrice);
    } else {
      return "<span class=\"badge\">-".concat(item.price.discount.amount, "%</span> <s class=\"text-muted\"><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.listPrice, "</s> <span><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.netPrice, "</span>");
    }
  }

  function owlDisplay() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      dots: false
    });

    function progress() {
      $("#progressBar").css("width", "0%");
      $("#progressBar").animate({
        width: "100%"
      }, 10000, "linear", function () {
        progress();
        owl.trigger('next.owl.carousel');
      });
    }

    ;
    progress();
  }

  function homepageGames(sectionId, data) {
    // ispisivanje igrica
    if ($(window).width() < 768 || $(window).width() >= 992) {
      var maxItemsFirstRow = 4;
    } else {
      var maxItemsFirstRow = 3;
    }

    var counter = [];
    var firstRow = data.filter(function (game, index) {
      // izvlacenje prvih 4 igrica
      if (counter.length < maxItemsFirstRow) {
        if (sectionId == "newReleases") {
          return game.newRelease.value && counter.push(index);
        } else if (sectionId == "hotSales") {
          return game.price.discount.isDiscounted && counter.push(index);
        } else if (sectionId == "topSellers") {
          return game.otherId.includes(2) && counter.push(index);
        }
      }
    });
    displayGames(firstRow, sectionId, ""); // ispisivanje prvog reda 
  }

  function displayAllSections(result) {
    // ispisivanje svih sekcija na pocetnoj stranici + funkcije za dinamicko menjanje teksta ~ ellipsis
    homepageGames("newReleases", result);
    homepageGames("hotSales", result);
    homepageGames("topSellers", result);
    getText();
    truncateText();
  }

  function getSingle() {
    //funkcija za dohvatanje podataka o igrici + owl-carousel za single.html
    $.ajax({
      url: "js/data/allGames.json",
      type: "GET",
      dataType: "json",
      success: function success(result) {
        displaySingle(result);
        var owl_single = $(".single");
        owl_single.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          nav: false,
          autoplayHoverPause: true
        });
      },
      error: function error(xhr, status, _error3) {
        console.log(_error3);
      }
    });
  }

  function getLogoPriceSection(logo, alt, price) {
    //ispisivanje cene na single.html
    var logoDisplay = "<div class=\"col-3\">\n\t\t\t\t\t\t<img src=\"".concat(logo, "\" class=\"img-fluid\" alt=\"").concat(alt, "\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-9 d-flex flex-column align-items-end\">");

    if (!price.discount.isDiscounted) {
      logoDisplay += "<div class=\"d-flex flex-column align-items-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"price\" value=\"".concat(price.value.netPrice, "\">Buy Now!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"current\" class=\"pt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign\"></i>").concat(price.value.netPrice, "\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\t\n\t\t\t\t\t\t\t\t\t\t</div>");
    } else {
      logoDisplay += "<div class=\"d-flex flex-column align-items-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"price\" value=\"".concat(price.value.netPrice, "\">Buy Now!</button>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"d-flex justify-content-around align-items-center pt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-danger\">-").concat(price.discount.amount, "%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<s class=\"pl-2 pr-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign \"></i>").concat(price.value.listPrice, "\n\t\t\t\t\t\t\t\t\t\t\t\t</s> \n\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"current\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign\"></i>").concat(price.value.netPrice, "\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\t\n\t\t\t\t\t\t\t\t\t\t</div>");
    }

    logoDisplay += "</div>";
    $("#logo-game-container").append(logoDisplay);
  }

  function getAbout(about, textInfo) {
    //ispisivanje informacija o igrici na single.html
    var info = "";
    var text = "";

    for (var i in about) {
      info += "<li>\n\t\t\t\t\t\t<h6>".concat(about[i].name, "</h6>\n\t\t\t\t\t\t<p>").concat(about[i].value, "</p>\n\t\t\t\t\t</li>");
    }

    for (var _i3 in textInfo) {
      text += "<h6>".concat(textInfo[_i3][0], "</h6>\n\t\t\t\t\t\t<p>").concat(textInfo[_i3][1], "</p>");
    }

    $("#about").append(info);
    $("#infoText").append(text);
  }

  function getScreenshots(gallery, alt) {
    //ispisivanje dodatnih slika igrice na single.html
    var screenshots = "";
    screenshots = '<div class="owl-carousel single">';

    for (var i in gallery) {
      screenshots += "<div class=\"item\">\n\t\t\t<img src=\"".concat(gallery[i], "\" class=\"img-fluid\" alt=\"").concat(alt, "\">\n\t\t</div>");
    }

    screenshots += "</div";
    $("#slika").append(screenshots);
  }

  function fillSystemReq(minOrRec, specifications) {
    //ispisivanje sistemskih zahteva na single.html 
    for (var i in specifications) {
      //create
      var li = document.createElement("li");
      var h6 = document.createElement("h6");
      h6.className = "text-muted";
      var h6Content = document.createTextNode(specifications[i].name);
      var p = document.createElement("p");
      var pContent = document.createTextNode(specifications[i].value); //appending

      li.appendChild(h6);
      h6.appendChild(h6Content);
      li.appendChild(p);
      p.appendChild(pContent);
      $("#" + minOrRec).append(li);
    }
  }

  function displaySingle(allGames) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = allGames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var item = _step3.value;

        if (item.id == localStorage.getItem("id")) {
          document.title = "Game Hut - " + item.name;
          $("#name").append(item.name);
          $("#gameName").append(item.name);
          getLogoPriceSection(item.image.logo, item.name, item.price);
          getAbout(item.info.about, item.info.text);
          fillSystemReq("minimum", item.specifications.minimum);
          fillSystemReq("recommended", item.specifications.recommended);
          getScreenshots(item.image.gallery, item.name);
          var owl_single = $(".single");
          owl_single.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            mouseDrag: true,
            touchDrag: true,
            dots: true,
            nav: false,
            autoplayHoverPause: true
          });
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  function displayCheckbox(data, div) {
    var display = "<div class='p-3'>";
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var item = _step4.value;
        display += "<li class=\"d-flex align-items-center justify-content-start\">\n\t\t\t\t\t\t\t<label for=\"".concat(item.name.split(" ").join(""), "\" class=\"customChb w-100\"> ").concat(item.name, "\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"").concat(item.name.split(" ").join(""), "\" value=\"").concat(item.id, "\" name=");

        if (div == "mode") {
          display += "modes";
        } else if (div == "categoryChb") {
          display += "category";
        } else {
          display += "other";
        }

        display += ">\n\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\t\t\t\t\t\n\t\t\t\t\t\t</li>";
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    ;
    display += '</div>';
    $("#" + div).html(display);
  }

  function displayStoreFirst(data) {
    var otherPages = [];
    var currentPage = [];
    var items = data.filter(function (game) {
      if (currentPage.length < maxItemsStore) {
        return currentPage.push(game);
      } else {
        otherPages.push(game);
      }
    });
    displayGames(items, "products", "");

    if (currentPage.length <= maxItemsStore && currentPage.length > 0) {
      displayPagination(otherPages, currentPage);
    } else {
      $("#pag").empty();
    }

    getText();
    truncateText();
  }

  function displayComingSoon(data) {
    var content = "<div class='owl-carousel' id='coming-owl'>";
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var game = _step5.value;
        var month = void 0,
            day = void 0,
            year = void 0;
        var date = game.releaseDate;
        var dateSplit = date.split("-");
        day = dateSplit[2];
        year = dateSplit[0];

        switch (dateSplit[1]) {
          case "01":
            month = "Jan";
            break;

          case "02":
            month = "Feb";
            break;

          case "03":
            month = "Mar";
            break;

          case "04":
            month = "Apr";
            break;

          case "05":
            month = "May";
            break;

          case "06":
            month = "Jun";
            break;

          case "07":
            month = "Jul";
            break;

          case "08":
            month = "Aug";
            break;

          case "09":
            month = "Sep";
            break;

          case "10":
            month = "Oct";
            break;

          case "11":
            month = "Nov";
            break;

          case "12":
            month = "Dec";
            break;
        }

        content += "<div class=\"soon_item_col\">\n\t\t\t\t\t\t\t<div class=\"soon_item\">\n\t\t\t\t\t\t\t\t<div class=\"soon_background\" id=\"bg".concat(game.id, "\"></div>\n\t\t\t\t\t\t\t\t<div class=\"soon_content d-flex flex-column align-items-center justify-content-center text-center\">\n\t\t\t\t\t\t\t\t\t<img src=\"").concat(game.image.logo.src, "\" class=\"img-fluid\" alt=\"").concat(game.image.logo.alt, "\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"soon_title pt-3\">Release Date: ").concat(month, " ").concat(day, ", ").concat(year, "</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>");
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    content += "</div>";
    $(".coming-soon").html(content);
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _game = _step6.value;
        $("#bg" + _game.id).css("background-image", "url(" + _game.image.background.src + ")");
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    var coming = $("#coming-owl");
    coming.owlCarousel({
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      loop: true,
      dots: false,
      nav: false,
      stagePadding: 50,
      margin: 20,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

  function filterResponsive() {
    if (window.innerWidth < 992) {
      var _header = "<button type='button' id='closeFilter'>Close filters</button>";
      $("#filter-header").html(_header);
      $("#filterBg").css("width", "150%");
      $("#filter-small").html($("#filterBg"));
      $("#filter-wrapper").hide();
      $("#filter-wrapper").css("background-color", "#1d1d1d");
      $("#filterBg").on("click", function () {
        $("#filter-wrapper").fadeIn();
      });
      $("#closeFilter").on("click", function () {
        $("#filter-wrapper").fadeOut();
      });
      $("#filter-wrapper").css({
        position: "fixed",
        top: "0",
        left: "0",
        bottom: "0",
        "z-index": "999",
        "overflow-y": "scroll"
      });
      $("#filterBg").on("mouseover", function () {
        $(this).css("cursor", "pointer");
      });
    } else {
      $("#filter-header").html("");
      $("#filterBg").css("width", "100%");
      $("#filter").prepend($("#filterBg"));
      $("#filter-wrapper").show();
      $("#filter-wrapper").css("background-color", "transparent");
      $("#filter-wrapper").css({
        position: "relative",
        "z-index": 1,
        "overflow-y": "hidden"
      });
    }
  }

  $(document).on("click", ".openSingle", function () {
    localStorage.setItem("id", $(this).attr("id"));
    open("single.html", "_self");
  });
  var maxItemsStore = 9;
  $(document).on("click", "#filterCat", rotateHandler("#categoryChb", "#filterCat"));
  $(document).on("click", "#priceToggle", rotateHandler("#priceRange", "#priceToggle"));
  $(document).on("click", "#more-filters", rotateHandler("#mode", "#more-filters"));
  $(document).on("click", "#filter-other", rotateHandler("#otherFilter", "#filter-other"));
  var degreesCat = 0,
      degreesPrice = 0,
      degreesMore = 0,
      degreesOther = 0;

  function rotateHandler(button, div) {
    return function () {
      $(button).slideToggle();

      if (div == "#filterCat") {
        degreesCat += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesCat + "deg)");
      } else if (div == "#priceToggle") {
        degreesPrice += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesPrice + "deg)");
      } else if (div == "#more-filters") {
        degreesMore += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesMore + "deg)");
      } else {
        degreesOther += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesOther + "deg)");
      }
    };
  }

  function removeUnchecked(array, value) {
    var index = array.indexOf(value); // dohvatanje indeksa elementa koji je unchecked u nizu 

    if (index != -1) {
      // ako se nalazi u nizu
      array.splice(index, 1); // uklanjanje tog elementa 
    }
  }

  var filtered = [];
  var checkedCat = [];
  var checkedMode = [];
  var checkedOther = [];
  $(document).on("change", ":checkbox", function () {
    var val = Number($(this).val());

    if ($(this).is(":checked")) {
      if ($(this)[0].name == "modes") {
        checkedMode.push(val);
      } else if ($(this)[0].name == "other") {
        checkedOther.push(val);
      } else {
        checkedCat.push(val);
      }
    } else {
      if ($(this)[0].name == "modes") {
        removeUnchecked(checkedMode, val);
      } else if ($(this)[0].name == "other") {
        removeUnchecked(checkedOther, val);
      } else {
        removeUnchecked(checkedCat, val);
      }
    }

    filtered = allGames.filter(function (game) {
      if (checkedCat.every(function (value) {
        return game.catId.includes(value);
      }) && checkedOther.every(function (value) {
        if (game.otherId !== null) {
          return game.otherId.includes(value);
        }
      }) && checkedMode.every(function (value) {
        return game.modes.includes(value);
      }) && Math.ceil(game.price.value.netPrice) > priceFrom && Math.floor(game.price.value.netPrice) < priceTo) {
        return game;
      }
    });
    displayStoreFirst(filtered);

    if (!filtered.length) {
      displayNoResults();
    }
  });
  var priceFrom = 0;
  var priceTo = 60;
  $("#priceFrom").on("input", getRangeValue("#from", "#priceFrom"));
  $("#priceTo").on("input", getRangeValue("#to", "#priceTo"));

  function getRangeValue(output, value) {
    return function () {
      $(output).val($(value).val());

      if (output == "#from") {
        priceFrom = $(value).val();
      } else {
        priceTo = $(value).val();
      }

      filtered = allGames.filter(function (game) {
        if (checkedCat.every(function (value) {
          return game.catId.includes(value);
        }) && checkedOther.every(function (value) {
          if (game.otherId !== null) {
            return game.otherId.includes(value);
          }
        }) && checkedMode.every(function (value) {
          return game.modes.includes(value);
        })) {
          return Math.ceil(game.price.value.netPrice) > priceFrom && Math.floor(game.price.value.netPrice) < priceTo;
        }
      });
      displayStoreFirst(filtered);

      if (!filtered.length) {
        displayNoResults();
      }
    };
  }

  $("#sortDdl").hide();
  $("#sortBtn").focus(function () {
    $("#sortDdl").fadeIn();
  });
  $("#sortBtn").focusout(function () {
    $("#sortDdl").fadeOut();
  });

  function sortByNameAZ(data) {
    data.sort(function (a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  function sortByNameZA(data) {
    data.sort(function (a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return 1;
      } else if (nameA > nameB) {
        return -1;
      }

      return 0;
    });
  }

  function sortByPriceHighLow(data) {
    data.sort(function (a, b) {
      var priceA;
      var priceB;
      priceA = Math.round(a.price.value.netPrice);
      priceB = Math.round(b.price.value.netPrice);

      if (priceA < priceB) {
        return 1;
      } else if (priceA > priceB) {
        return -1;
      }

      return 0;
    });
  }

  function sortByPriceLowHigh(data) {
    data.sort(function (a, b) {
      var priceA;
      var priceB;
      priceA = Math.round(a.price.value.netPrice);
      priceB = Math.round(b.price.value.netPrice);

      if (priceA < priceB) {
        return -1;
      } else if (priceA > priceB) {
        return 1;
      }

      return 0;
    });
  }

  $("#sort").on("change", function () {
    var value = $(this).val();

    if (value == 1) {
      sortByNameAZ(allGames);
      sortByNameAZ(filtered);
    } else if (value == 2) {
      sortByNameZA(allGames);
      sortByNameZA(filtered);
    } else if (value == 3) {
      sortByPriceHighLow(allGames);
      sortByPriceHighLow(filtered);
    } else if (value == 4) {
      sortByPriceLowHigh(allGames);
      sortByPriceLowHigh(filtered);
    }

    if (!filtered.length) {
      displayStoreFirst(allGames);
    } else {
      displayStoreFirst(filtered);
    }
  });

  function displayPagination(otherPages, currentPage) {
    var allItems = [];

    if (otherPages.length > maxItemsStore) {
      var another = otherPages.slice(maxItemsStore);
      otherPages.splice(maxItemsStore, maxItemsStore * 2);
    }

    allItems.push(currentPage, otherPages, another);

    if (allItems.length) {
      var display = "<ul class=\"d-flex flex-row\" id=\"pagination\">";

      for (var i = 0; i < allItems.length; i++) {
        if (allItems[i] != undefined && allItems[i].length > 0) {
          display += "<li class=\"pagination-item mr-2";

          if (i == 0) {
            display += " active-pag";
          }

          display += "\" id=\"pag-".concat(i + 1, "\">").concat(i + 1, "</li>");
        }
      }

      display += "</ul>";
      $("#pag").html(display);
    }

    $(".pagination-item").on("click", function () {
      window.top.location.href = "#sortBy";

      if (this.id == "pag-1") {
        displayGames(currentPage, "products", "");
        $(".pagination-item").removeClass("active-pag");
        $(this).addClass("active-pag");
      } else if (this.id == "pag-2") {
        $(".pagination-item").removeClass("active-pag");
        $(this).addClass("active-pag");
        displayGames(otherPages, "products", "");
      } else {
        $(".pagination-item").removeClass("active-pag");
        $(this).addClass("active-pag");
        displayGames(another, "products", "");
      }
    });
  }

  function displayNoResults() {
    $("#products").removeClass("row-cols-1 row-cols-sm-2 row-cols-md-3");
    $("#products").addClass("d-flex align-items-center justify-content-center h-100");
    var msg = "<div id=\"noMatch\" class=\"pb-5 pb-md-0\">\n\t\t\t\t\t\t\t<i class=\"far fa-frown pb-3\"></i>\n\t\t\t\t\t\t\t<p>No results found</p>\t\n\t\t\t\t\t\t\t<span>Unfortunately I could not find any results matching your search.</span>\t   \n\t\t\t\t\t\t</div>";
    $("#products").html(msg);
  }
});