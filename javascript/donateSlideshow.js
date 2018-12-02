$(document).ready(function(){
  $('.donateSlideshow').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  autoplay: true,
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