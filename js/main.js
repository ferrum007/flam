$(function () {
     // slider
     $('.slider').slick({
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>',
     });  

      $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        }); 
});