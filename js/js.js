$(document).ready(function () {
  $('.inner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<i class="inner-arrow-right" aria-hidden="true">1</i>',
    prevArrow: '<i class="inner-arrow-left" aria-hidden="true">1</i>',
    dots: true,
    dotsClass: 'inner-dots',
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true

        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  })
});

$(document).ready(function () {
  $('.option-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<i class="options-right" aria-hidden="true">1</i>',
    prevArrow: '<i class="options-left" aria-hidden="true">2</i>',
    dots: false,
    dotsClass: 'options-dots',
    autoplay: false,
    autoplaySpeed: 2000,
    // centerMode: true,
    responsive: [{
        breakpoint: 3561,
        settings: "unslick"
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.delivery-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<i class="delivery-right" aria-hidden="true">1</i>',
    prevArrow: '<i class="delivery-left" aria-hidden="true">2</i>',
    dots: false,
    dotsClass: 'delivery-dots',
    autoplay: false,
    autoplaySpeed: 2000,
    // centerMode: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          arrows: false,
          dots: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        /* если не получиться сделать 768 то убираем всёы */
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});

// $(document).ready(function () {
//   $('.services-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: '<i class="delivery-right" aria-hidden="true">1</i>',
//     prevArrow: '<i class="delivery-left" aria-hidden="true">2</i>',
//     dots: false,
//     dotsClass: 'delivery-dots',
//     autoplay: false,
//     autoplaySpeed: 2000,
//     // centerMode: true,
//     responsive: [{
//         breakpoint: 1400,
//         settings: {
//           arrows: false,
//           dots: false
//         }
//       }, {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//           arrows: false
//         }
//       },
//       {
//         breakpoint: 1024,
//         /* если не получиться сделать 768 то убираем всёы */
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//           arrows: false
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToScroll: 1,
//           slidesToShow: 1,
//           dots: true,
//           arrows: false
//         }
//       }
//     ]
//   });
// });

$(document).ready(function () {
  $('.services-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    nextArrow: '<i class="services-right"aria-hidden="true"></i>',
    prevArrow: '<i class="services-left" aria-hidden="true"></i>',
    dots: false,
    dotsClass: "services-dots",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrow: true,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          dots: false
        }
      }
    ]
  })
})