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
  jQuery('#about_restaurant').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: true,
        },
      },
    ],
    prevArrow: $('#slider_2 .carousel_right_arrow > .prev'),
    nextArrow: $('#slider_2 .carousel_right_arrow > .next'),
  });
  jQuery('#dh_section_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 2,
          variableWidth: true,
          arrows: true,
        },
      },
    ],
    prevArrow: $('#dh_section_paginator .carousel_right_arrow > .prev'),
    nextArrow: $('#dh_section_paginator .carousel_right_arrow > .next'),
  });
});
