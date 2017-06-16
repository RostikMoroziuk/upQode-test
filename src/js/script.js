$(function () {
  //Add Google Maps to page
  function initMap() {
    //Lviv coords
    var coords = {
      lat: 49.834050,
      lng: 24.008120
    };
    //Add on page
    new google.maps.Map(document.querySelector(".js-map"), {
      zoom: 16,
      center: coords
    });
  }

  function init() {
    //Dropdown menu second level on hover
    $('ul.nav > li.dropdown').hover(function () { //hover on
      $(this).find('.dropdown-menu').eq(0).slideDown();
    }, function () { //hover out
      $(this).find('.dropdown-menu').eq(0).slideUp();
    });

    //Dropdown menu third level on hover
    var parentDropdownWidth = $('.nav > .dropdown > .dropdown-menu').eq(0) //2nd level menu
      .width();
    $('.dropdown-menu > li.dropdown').hover(function () { //hover on
      $(this).find('.dropdown-menu').eq(0).show().animate({ //right slide
        left: parentDropdownWidth
      });
    }, function () { //hover out
      $(this).find('.dropdown-menu').eq(0).hide().animate({ //right slide
        left: 0
      })
    });

    //card on why choose us hover 
    $(".card").hover(function() {//hover on
      console.log($(this).find(".card--content-hover"));
      $(this).find(".card--content-hover").css({height: "149px"});
    },
    function() {//hover out
      $(this).find(".card--content-hover").css({height: "0"});
    })
  }

  //Bootstrap carousel
  $('.carousel').carousel({
    interval: 2000000
  })

  window.initMap = initMap;
  init();
});