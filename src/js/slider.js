jQuery(function () {
  jQuery('#details_restaurant_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: $('#slider_1 .carousel_right_arrow > .prev'),
    nextArrow: $('#slider_1 .carousel_right_arrow > .next'),
  });
});
