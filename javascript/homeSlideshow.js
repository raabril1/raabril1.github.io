$(document).ready(function(){
  $('.mainSlideshow').slick({
	  autoplay: true,
	  dots: true,
	   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
  });
});