"use strict";

// let imagesWhyReached = false
// let whoAreWeReached = false
// let quotesReached = false
// let imagesWorkReached = false
// document.addEventListener('scroll', () => {
//   if (!imagesWhyReached) {
//     const imagesWhy = document.querySelector('.images-why');
//     const imagesWhyOffset = imagesWhy.getBoundingClientRect().top
//     const imagesWhyHeight = window.innerHeight / 10
//     if (imagesWhyOffset - window.innerHeight + imagesWhyHeight < 0) {
//       document.querySelector('.images-why').classList.add('active')
//       imagesWhyReached = true
//     }
//   } else if (!whoAreWeReached) {
//     const whoAreWe = document.querySelector('.who-are-we');
//     const whoAreWeOffset = whoAreWe.getBoundingClientRect().top
//     const whoAreWeHeight = window.innerHeight / 10
//     if (whoAreWeOffset - window.innerHeight + whoAreWeHeight < 0) {
//       document.querySelector('.who-are-we').classList.add('active')
//       whoAreWeReached = true
//     }
//   } else if (!quotesReached) {
//     const quotes = document.querySelector('.quote');
//     const quotesOffset = quotes.getBoundingClientRect().top
//     const quotesHeight = window.innerHeight / 10
//     if (quotesOffset - window.innerHeight + quotesHeight < 0) {
//       document.querySelector('.quote').classList.add('active')
//       quotesReached = true
//     }
//   } else if (!imagesWorkReached) {
//     const imagesWork = document.querySelector('.work-here');
//     const imagesWorkOffset = imagesWork.getBoundingClientRect().top
//     const imagesWorkHeight = window.innerHeight / 10
//     if (imagesWorkOffset - window.innerHeight + imagesWorkHeight < 0) {
//       document.querySelector('.work-here').classList.add('active')
//       imagesWorkReached = true
//     }
//   }
//   const cards = document.querySelectorAll('.card');
//   cards.forEach((card) => {
//     const cardsOffset = card.getBoundingClientRect().top
//     const cardsHeight = window.innerHeight / 100
//     if (cardsOffset - window.innerHeight + cardsHeight < 0) {
//       card.classList.add('active')
//     }
//   })
// })
// const play = document.querySelector('.play')
// play.addEventListener('click', () => {
//   play.classList.add('active')
//   const video = document.querySelector('video')
//   video.play()
//   video.controls = true
// })
// const toViewRoles = () => {
//   setTimeout(() => {
//     const positions = document.querySelector('.positions');
//     let positionsOffset = positions.getBoundingClientRect().top
//     if (window.innerWidth < 767) {
//       positionsOffset += 100
//     }
//     if (positionsOffset > 110) {
//       window.scrollTo(0, window.scrollY + (positionsOffset / 50))
//       toViewRoles()
//     }
//   }, 1)
// }
// const toViewRolesLink = document.querySelector('.header__cta a')
// toViewRolesLink.addEventListener('click', () => {
//   toViewRoles()
// })
// const accordionContent = document.querySelectorAll('.accordion__content')
// accordionContent.forEach((accordion) => {
//   accordion.height = accordion.offsetHeight + 'px'
//   accordion.style.maxHeight = '0px'
// })
// const accordionHeader = document.querySelectorAll('.accordion__header')
// accordionHeader.forEach((accordion, i) => {
//   accordion.addEventListener('click', () => {
//     accordionContent[i].style.maxHeight = accordionContent[i].style.maxHeight === '0px' ? accordionContent[i].height : '0px'
//     accordion.parentElement.classList.toggle('active')
//   })
// })
var splides = document.querySelectorAll('.splide');
splides.forEach(function (e, i) {
  var perMove = 1;
  var focus = 'center';
  var trimSpace = true;
  var arrows = false;
  var height = '526';
  var type = 'slide';
  var fixedWidth = '526';
  var pagination = false; // if (e.classList.contains('splide--vertical')) {
  //     direction = 'ttb'
  //     height = '526px'
  //     perPage = 3
  // } else {
  //     perPage = window.innerWidth < 767 ? perPage : 2
  // }

  new Splide(e, {
    type: type,
    arrows: arrows,
    height: height,
    fixedWidth: fixedWidth,
    perMove: perMove,
    focus: focus,
    trimSpace: trimSpace,
    pagination: pagination // arrowPath: "M40,5.765,34.483,0,20,15.181,5.517,0,0,5.765l20,20.9Z"
    // breakpoints: {
    //     600: {
    //         perPage: 2,
    //         height : '6rem',
    //     }
    // }

  }).mount();
});
//# sourceMappingURL=main.js.map
