$(document).ready(function(){
$('.partnersSlideshow').slick({
	  infinite: false,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  autoplay: true,
	  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ]
	});
});