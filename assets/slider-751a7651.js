jQuery(function(){jQuery("#details_restaurant_slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,mobileFirst:!0,variableWidth:!0,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}],prevArrow:$("#slider_1 .carousel_right_arrow > .prev"),nextArrow:$("#slider_1 .carousel_right_arrow > .next")}),jQuery("#about_restaurant").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,mobileFirst:!0,variableWidth:!0,responsive:[{breakpoint:1024,settings:{infinite:!0,slidesToShow:2,slidesToScroll:1,variableWidth:!0}},{breakpoint:414,settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!0}}],prevArrow:$("#slider_2 .carousel_right_arrow > .prev"),nextArrow:$("#slider_2 .carousel_right_arrow > .next")}),jQuery("#dh_section_slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,mobileFirst:!0,variableWidth:!0,responsive:[{breakpoint:1024,settings:{infinite:!0,slidesToShow:3,slidesToScroll:1,variableWidth:!0}},{breakpoint:414,settings:{infinite:!0,slidesToShow:1,slidesToScroll:2,variableWidth:!0,arrows:!0}}],prevArrow:$("#dh_section_paginator .carousel_right_arrow > .prev"),nextArrow:$("#dh_section_paginator .carousel_right_arrow > .next")})});
