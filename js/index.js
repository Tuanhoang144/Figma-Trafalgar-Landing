const toggle = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const menu = document.querySelector(".nav-list");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
close.addEventListener("click", function () {
  menu.classList.remove(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".open-menu") && !e.target.matches(".menu-buttons-icon")) {
    menu.classList.remove(activeClass);
    console.log(e.target);
  }
});


$(".customers").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  breakpoint: 1600,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./img/Vector.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./img/next.png"/></button>`,
  responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
});