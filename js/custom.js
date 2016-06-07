// Main Slider
$(function() {
    $("#carousel").owlCarousel({
        animateIn: 'bounceInRight',
        animateOut: 'slideOutLeft',
        items:1,
        width:2000,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        loop:true,
        dotsEach:true,
        nav:true,
        navText:["<",">"]
});
        
       
// Small Carousel Thumbs
    $("#carousel_thumb").owlCarousel({
        items:4,
        width:1000,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        loop:true,
        dotsEach:true,
        nav:true,
        height:200,
        navText:["<",">"]
    });
        
    
// Mobile Menu Icon 
        
        
   $("#menu_icon").on("click", function(){
     $(".main_nav").slideToggle(300);

   });

    $(window).resize(function(){
       if ( $(window).width() > 1023 ){
            $(".main_nav").removeAttr("style");
        }
    });
});


 $(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $(".section_top .box").offset().top - ($(window).height() / 1.2)) {

    $(".section_top .box").each(function(i){

      setTimeout(function(){
        $(".section_top .box").eq(i).addClass("animation");
      }, 200 * (i+1));
    });

  }

});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $(".section_middle .box").offset().top - ($(window).height() / 1.2)) {

    $(".section_middle .box").each(function(i){

      setTimeout(function(){
        $(".section_middle .box").eq(i).addClass("animation");
      }, 200 * (i+1));
    });

  }

});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $(".section_bottom .box").offset().top - ($(window).height() / 1.2)) {

    $(".section_bottom .box").each(function(i){

      setTimeout(function(){
        $(".section_bottom .box").eq(i).addClass("animation");
      }, 200 * (i+1));
    });

  }

});