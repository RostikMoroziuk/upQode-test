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

    //Change shevron on hover
    $(".menu--item").hover(function() {
      $(this).find(".js-dropdown--carret").eq(0).removeClass("fa-angle-right").addClass("fa-angle-double-right");
    }, function() {
      $(this).find(".js-dropdown--carret").eq(0).removeClass("fa-angle-double-right").addClass("fa-angle-right");
    });

    //card on why choose us hover 
    $(".card").hover(function () { //hover on
        console.log($(this).find(".card--content-hover"));
        $(this).find(".card--content-hover").css({
          height: "149px"
        });
      },
      function () { //hover out
        $(this).find(".card--content-hover").css({
          height: "0"
        });
      })
    
    //Change page on our product
    $(".dots--dot").on("click", function() {
      //target dot
      var dot = $(this);
      if(dot.find(".dots--dot-active").length > 0) {//if click on current page
        return;
      }
      var pageIndex = dot.attr("data-index");
      //change active page
      $(".products--content-active").fadeOut(200, function() {
        $(".products--content-active").removeClass("products--content-active");
        $(".products--content").eq(pageIndex).fadeIn(200).addClass("products--content-active");
      });

      $(".dots--dot-active").removeClass("dots--dot-active");
      dot.addClass("dots--dot-active");
    })

    //Checkbox in contacts 
    $(".check--checkbox").on("click", function() {
      $(this).find(".check--value-mark").toggleClass("fa-check");
    })
  }

  //Draw svg filter for header in our products section
  function drawFilter() {
    var TRIANGLE_WIDTH = 138;
    var HEADER_HEIGHT = 75; //in percentage
    //Parent is products block
    var parentWidth = $(".products").width();
    var path = $(".svg--field path"); //drawing path for polygon

    var triangleStart = parseInt(parentWidth / 2 - TRIANGLE_WIDTH / 2); //in pixels
    triangleStart = ((triangleStart / parentWidth) * 100).toFixed(2); //in percentage

    var triangleEnd = 100 - triangleStart;
    console.log(triangleStart, triangleEnd);
    path.attr("d", "M0,0 L 100,0 100 " + HEADER_HEIGHT + " " + triangleEnd + "," + HEADER_HEIGHT
    + " 50,100 " + triangleStart + "," + HEADER_HEIGHT + " " + 0 + "," +  HEADER_HEIGHT + "Z");

  }

  window.initMap = initMap;
  //Bootstrap carousel

  drawFilter()
  $('.carousel').carousel({
    interval: 2000000
  })

  init();

});