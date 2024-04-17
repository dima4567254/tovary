console.log('work6454');
// alert("Hello! I am an alert box!!");

// $('select,dropdown-link__select').styler();
// setTimeout(function () {
//   $('select,filter-selects__sort').styler();
// }, 100)

// $('.catalog-slider').slick({
//   slidesToShow: 4,  /* количество слайдов на показ*/
//   slidesToScroll: 1,
//   // autoplay: true,
//   // autoplaySpeed: 3000,
//   // responsive: [
//   //   {
//   //     breakpoint: 768,
//   //     settings: {
//   //       slidesToShow: 2,
//   //       slidesToScroll: 2,
//   //     }
//   //   },
//   //   {
//   //     breakpoint: 577,
//   //     settings: {
//   //       slidesToShow: 1,
//   //       // slidesToScroll: 2,
//   //     }
//   //   },
//   // ]
// });

const sliderIntro = new Swiper('.sliderIntro', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 15,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
)

const sliderCatalog = new Swiper('.sliderCatalog', {
  slidesPerView: 4,
  loop: true,
  loopedslides: 1,
  spaceBetween: 20,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
}
)

const sliderCheap = new Swiper('.sliderCheap', {
  slidesPerView: 4,
  loop: true,
  loopedslides: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: '.button-next-cheap',
    prevEl: '.button-prev-cheap',
  },
}
)
const slidergGift = new Swiper('.slidergGift', {
  slidesPerView: 4,
  loop: true,
  loopedslides: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: '.button-next-gift',
    prevEl: '.button-prev-gift',
  },
}
)

const sliderRecommend = new Swiper('.sliderRecommend', {
  slidesPerView: 4,
  loop: true,
  loopedslides: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.button-next-gift',
    prevEl: '.button-prev-gift',
  },
}
)

const sliderShares = new Swiper('.sliderShares', {
  slidesPerView: 3,
  loop: true,
  loopedslides: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.button-next-shares',
    prevEl: '.button-prev-shares',
  },
}
)

const sliderArticles = new Swiper('.sliderArticles', {
  slidesPerView: 3,
  loop: true,
  loopedslides: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.button-next-articles',
    prevEl: '.button-prev-articles',
  },
}
)
const sliderPartners = new Swiper('.sliderPartners', {
  slidesPerView: 6,
  loop: true,
  loopedslides: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.button-next-partners',
    prevEl: '.button-prev-partners',
  },
}
)


function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  // const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  let marqueeInterval;

  // parentSelector.insertAdjacentHTML('beforeend', clone);
  // parentSelector.insertAdjacentHTML('beforeend', clone);

  function startMarquee() {
    marqueeInterval = setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (2 > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  function stopMarquee() {
    clearInterval(marqueeInterval);
  }

  parentSelector.addEventListener('mouseenter', stopMarquee);
  parentSelector.addEventListener('mouseleave', startMarquee);

  startMarquee();
}

window.addEventListener('load', () => Marquee('.marquee', 0.4));
// для движения полоски



$('.marquee__btn').on('click', function () {
  $('.marquee, .marquee__svg').toggleClass('active');
});

// скрыть полоску marquee


const items = document.querySelectorAll('.menu__item-rub');
const lists = document.querySelectorAll('.menu-none');

items.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    // Сбросить активный класс со всех элементов
    items.forEach(item => item.classList.remove('active'));

    // Добавить активный класс на текущий элемент
    item.classList.add('active');

    // Скрыть все списки
    lists.forEach(list => list.classList.add('hidden'));

    // Показать список, соответствующий текущему элементу
    lists[index].classList.remove('hidden');
  });
});

const items2 = document.querySelectorAll('.menu__item-pub');
const lists2 = document.querySelectorAll('.menu__item-two');

items2.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    // Сбросить активный класс со всех элементов
    items2.forEach(item => item.classList.remove('active'));

    // Добавить активный класс на текущий элемент
    item.classList.add('active');

    // Скрыть все списки
    lists2.forEach(list => list.classList.add('hidden'));

    // Показать список, соответствующий текущему элементу
    lists2[index].classList.remove('hidden');
  });
});
// для меню

// $(".catalog-main__star").rateYo({
//   starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
//     '<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/>' +
//     '</svg>'
// });

{/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="15px" height="15px" fill="#FBC82D"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg>

$(".catalog-main__star").rateYo({
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
    '<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/>' +
    '</svg>'
}); */}

$(".catalog-main__star").rateYo({
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
    '<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/>' +
    '</svg>'
});

// $(".catalog-main__star").rateYo({
//   starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
//     '<path d="M12 8c-1.654 0-3.107 0.497-4.243 1.393l-4.242-4.242c-0.828-0.828-2.167-0.828-3 0l-4.243 4.242C2.893 11.893 2.393 13.346 2 15s0.497 3.107 1.393 4.243l4.242 4.242c0.828 0.828 2.167 0.828 3 0l4.243-4.242C14.893 18.107 15.346 16.654 16 15s-0.497-3.107-1.393-4.243l-4.242-4.242c-0.828-0.828-2.167-0.828-3 0z"/>' +
//     '</svg>'
// });

// $(".catalog-main__star").rateYo({
//   rating: 3,
//   starWidth: "15px",
//   spacing: "7px",
//   ratedFill: "#FBC82D",
//   // normalFill: "red",
//   // starSvg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>" +
//   //   "<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'></path>" +
//   //   "</svg>"
//   // starSvg: "images/star_gray.svg"

// });
// $(function () {
//   $(".catalog-main__star").rateYo({
//     rating: 3.2,
//     starSvg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>" +
//       "<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'></path>" +
//       "</svg>"
//   });
// });
// $(".catalog-main__star").rateYo({
//   rating: 3.2,
//   starSvg: "<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path path d = "M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill = "white" ></path >
// </svg > "
// });

// $(function () {
//   // Ensure jQuery is loaded before proceeding
//   if (typeof jQuery === 'undefined') {
//     console.error('jQuery is required for this code to work. Please include the jQuery library before this script.');
//     return;
//   }

// $(".catalog-main__star").rateYo({
//   rating: 3.2,
//   starSvg: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
//     "<path path='M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.1" fill = "white" ></path >
// </svg > "
// });
// </svg > "
// });

$(".catalog-main__star").rateYo({
  rating: 3.2,
  starSvg: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
    "<path path='M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z' fill='white'></path></svg>",
});


// $(function () {

//   $("#rateYo").rateYo({
//     "rating": 3.2,
//     "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>" +
//       "<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379 4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'></path>" +
//       "</svg>",

//   });
// });
// $(function () {

//   $("#rateYo").rateYo({
//     // "rating": 3.2,
//     "starSvg": "<svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
//       "<path d='M9.99935 1.66699L12.5743 6.88366L18.3327 7.72533L14.166 11.7837L15.1493 17.517L9.99935 14.8087L4.84935 17.517L5.83268 11.7837L1.66602 7.72533L7.42435 6.88366L9.99935 1.66699Z' stroke='#BDBDBD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />" +
//       "</svg>",
//   });
// });

// <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9.99935 1.66699L12.5743 6.88366L18.3327 7.72533L14.166 11.7837L15.1493 17.517L9.99935 14.8087L4.84935 17.517L5.83268 11.7837L1.66602 7.72533L7.42435 6.88366L9.99935 1.66699Z" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
// </svg>

// $(function () {

// $("#rateYo").rateYo({

//   // "rating": 3.2,
//   "starSvg": "<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">"+
//     "<path d="M12 6.76l1.379 4.246h4.465l - 3.612 2.625 1.379"
//                            " 4.246-3.611-2.625-3.612 2.625" 
//       " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833" 
//       " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388" 
//       " 7.416 5.388-2.833-8.718" 
//       " 7.417-5.389h-9.167l-2.833-8.718z" ></path> "
//                 "</svg>"
// // )};
// });


// $('.marqueeBtn').on('click', function () {
//   $('.marquee').addClass('marquee-active');
//     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
// });

// document.querySelectorAll('.language__link').forEach((item) =>
//   item.addEventListener('click', () => {
//     const parent = item;
//     if (parent.classList.contains('language__link--active')) {
//       parent.classList.toggle('language__link--active');
//     }
//     else {
//       parent.classList.toggle('language__link--active');
//     }
//   })
// )

// let marquee = document.querySelector('.marquee')
// let marqueeBtn = document.querySelector('.marquee__btn')

// marqueeBtn.addEventListener('click', () => {
//   let marquee = document.querySelector('.marquee')
//   // marquee.style.borderRadius = '5px';
//   marquee.classList.addClass('marquee-active');
//   console.log('work1');
// });

// let buttonModal4 = document.querySelector('.westday');
// let buttonModal = document.querySelector('.item');
// ----------
// let marquee = document.querySelector('.marquee')
// let marqueeBtn = document.querySelector('.marquee__btn')
// marqueeBtn.addEventListener('click', () => {

//     marquee.classList.toggle('active');
// });
// -------------
// $('.marquee').on('click', function() {
//     $('.marqueeBtn').toggleClass('active');
// });

// $('.marquee').on('click', function() {
//     $('.marquee').slideToggle();
//     // $(this).toggleClass('questions__text--active');
//     // $(this)('.marquee').slideToggle('active');
// });


// $('.marquee').on('click', function() {
//     $(this).next().toggleClass();
//     // $(this).toggleClass('questions__text--active');
//     $(this)('.marquee__items').toggleClass('active');
// });
// $('.marqueeBtn').on('click', function() {
//     $('.marqueeBtn').toggleClass('active');
// });



// $('.menu__btn, .menu a').on('click', function () {
//     $('.menu__btn, .menu__items').toggleClass('active');
//     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
// });
// ------------------
// $('a[href="' + this.location.pathname + '"]').parent().addClass('header-fixed');

// const observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll('.menu__link').forEach((link) => {
//                 let id = link.getAttribute('href').replace('#', '');
//                 if (id === entry.target.id) {
//                     link.classList.add('link-active');
//                 } else {
//                     link.classList.remove('link-active');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 0.5
// });// для подсветки пунктов меню
// ------------------
$(".menu a, .scroll a").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  tops = top - 80;
  $('body,html').animate({ scrollTop: tops }, 1500);
});
// дял скрола
// -----------------------------

$(function () {
  let header = $('.header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      header.addClass('header-fixed');
    } else {
      header.removeClass('header-fixed');
    }
  });
});

// Функция для фиксированной шапки при скролле
// })