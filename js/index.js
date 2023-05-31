AOS.init();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });










$('.linkedin').click(function(e) {
  window.open('https://www.linkedin.com/in/vishwajeet-kumar-8080a51bb/');
  e.preventDefault();
});

$('.instagram').click(function(e) {
  window.open('https://www.instagram.com/vishwajeet_kr076/');
  e.preventDefault();
});

$('.github').click(function(e) {
  window.open('https://github.com/Witcher0766');
  e.preventDefault();
});

$('.pinterest').click(function(e) {
  window.open('https://in.pinterest.com/vhwjtk/');
  e.preventDefault();
});










function displayOut() {
var preloader = document.getElementById('preloader');
var loader = document.getElementById('loader');
setTimeout(function(){ 
  preloader.style.opacity='0';
  preloader.style.zIndex= '-10';
  loader.style.zIndex = '-10';
}, 3000);
}
displayOut();



$(window).scroll(function(){
  if ($(this).scrollTop() < 50) {
     $('.new').addClass('newClass');
  } else {
     $('.new').removeClass('newClass');
  }
});



