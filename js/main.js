$(document).ready(function(){
  //services
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        items:1,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });
    //img gallery
    $(document).ready(function () {
      let $btns = $(".project-area .button-group button");

      $btns.click(function (e) {
        $(".project-area .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
          filter: selector,
        });
        return false;
      });

      $(".project-area .button-group #btn1").trigger("click");

      $(".project-area .grid .test-popup-link").magnificPopup({
        type: "image",
        gallery: { enabled: true },
        // other options
      });

      function mySlick(){
        $(".wrapper").not('.slick-initialized').slick({
            centerMode:false,
            autoplay:true,
            dots:false,
            arrows:false,
            slidesToShow:3,
            responsive:[{
                breakpoint:786,
                settings:{
                    dots:false,
                    arrows:false,
                    slidesToShow:1,
                    slideToScroll:1
                }
            }]
        });
    }

    mySlick();

    });
    
})

