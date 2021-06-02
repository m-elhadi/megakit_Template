
$(function () {

    $('.jprt-container').jportilio(); 
  
  });

  // 
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 
  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });

  // 
  $('.brand-item').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.project-item').owlCarousel({
  loop:true,
  margin:10,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})
// start filter projects

$(document).ready(function(){

  $('.tab').click(function(){

    $('.all').fadeOut();

    $($(this).data('filter')).fadeToggle();


  })




});