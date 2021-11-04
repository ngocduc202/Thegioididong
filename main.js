const adressbtn = document.querySelector("#adress-form");
const adressclose = document.querySelector("#adress-close");
adressbtn.addEventListener("click", function () {
  document.querySelector(".adress-form").style.display = "flex";
});
adressclose.addEventListener("click", function () {
  document.querySelector(".adress-form").style.display = "none";
});
// slider-mobile
const sliderbtn = document.querySelector("#sidebar-menu-open");
const sliderclose = document.querySelector("#sidebar-menu-close");
sliderbtn.addEventListener("click", function () {
  document.querySelector(".sidebar-menu").style.transform = "translateY(0)";
});
sliderclose.addEventListener("click", function () {
  document.querySelector(".sidebar-menu").style.transform = "translateY(-100%)";
});
// slider
const rightbtn = document.querySelector(".fa-chevron-right");
const leftbtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".silder-content-left-top img ");
let index = 0;

rightbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".silder-content-left-top").style.right =
    index * 100 + "%";
});
leftbtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".silder-content-left-top").style.right =
    index * 100 + "%";
});
// Slider1
const imgNumberLi = document.querySelectorAll(
  ".silder-content-left-bottom li "
);

imgNumberLi.forEach(function (image, index) {
  image.addEventListener("click", function () {
    removeActive();
    document.querySelector(".silder-content-left-top").style.right =
      index * 100 + "%";
    image.classList.add("active");
  });
});
function removeActive() {
  let imgActive = document.querySelector(".active");
  imgActive.classList.remove("active");
}
// Slider-auto
function imgAuto() {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  removeActive();
  document.querySelector(".silder-content-left-top").style.right =
    index * 100 + "%";
  imgNumberLi[index].classList.add("active");
}
setInterval(imgAuto, 4000);
// Slider-product
const rightbtntwo = document.querySelector(".fa-chevron-right-two");
const leftbtntwo = document.querySelector(".fa-chevron-left-two");
const imgNumbertwo = document.querySelectorAll(
  ".slider-product-one-content-items "
);
rightbtntwo.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumbertwo.length - 1) {
    index = 0;
  }
  document.querySelector(
    ".slider-product-one-content-items-content"
  ).style.right = index * 100 + "%";
});
leftbtntwo.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = imgNumbertwo.length - 1;
  }
  document.querySelector(
    ".slider-product-one-content-items-content"
  ).style.right = index * 100 + "%";
});
// Slider-product 3
const rightbtnthree = document.querySelector(".fa-chevron-right-three");
const leftbtnthree = document.querySelector(".fa-chevron-left-three");
const imgNumberthree = document.querySelectorAll(
  ".product-gallery-two-content-left-bottom "
);
rightbtnthree.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumberthree.length - 1) {
    index = 0;
  }
  document.querySelector(
    ".product-gallery-two-content-left-bottom-content"
  ).style.right = index * 100 + "%";
});
leftbtnthree.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = imgNumberthree.length - 1;
  }
  document.querySelector(
    ".product-gallery-two-content-left-bottom-content"
  ).style.right = index * 100 + "%";
});
// Product-galery-four
const rightbtnfour = document.querySelector(".fa-chevron-right-four");
const leftbtnfour = document.querySelector(".fa-chevron-left-four");
const imgNumberfour = document.querySelectorAll(
  ".product-gallery-three-content-product "
);
rightbtnfour.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumberfour.length - 1) {
    index = 0;
  }
  document.querySelector(
    ".product-gallery-three-content-product-content"
  ).style.right = index * 100 + "%";
});
leftbtnfour.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = imgNumberfour.length - 1;
  }
  document.querySelector(
    ".product-gallery-three-content-product-content"
  ).style.right = index * 100 + "%";
});
// Product-galery-five
const rightbtnfive = document.querySelector(".fa-chevron-right-five");
const leftbtnfive = document.querySelector(".fa-chevron-left-five");
const imgNumberfive = document.querySelectorAll(
  ".product-gallery-four-content-product "
);
rightbtnfive.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumberfive.length - 1) {
    index = 0;
  }
  document.querySelector(
    ".product-gallery-four-content-product-content"
  ).style.right = index * 100 + "%";
});
leftbtnfive.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = imgNumberfive.length - 1;
  }
  document.querySelector(
    ".product-gallery-four-content-product-content"
  ).style.right = index * 100 + "%";
});
// application
const rightbtnsix = document.querySelector(".fa-chevron-right-six");
const leftbtnsix = document.querySelector(".fa-chevron-left-six");
const imgNumbersix = document.querySelectorAll(".application-col-2-content ");
rightbtnsix.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumbersix.length - 1) {
    index = 0;
  }
  document.querySelector(".application-col-2-container").style.right =
    index * 100 + "%";
});
leftbtnsix.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = imgNumbersix.length - 1;
  }
  document.querySelector(".application-col-2-container").style.right =
    index * 100 + "%";
});
// watch-slider
const child1 = document.getElementById("child1");
const child2 = document.getElementById("child2");
const child3 = document.getElementById("child3");
const child4 = document.getElementById("child4");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
function display_child2() {
  child1.classList.remove("display");
  child2.classList.add("display");
  child3.classList.remove("display");
  child4.classList.remove("display");
  content1.classList.remove("display_tab");
  content2.classList.add("display_tab");
  content3.classList.remove("display_tab");
  content4.classList.remove("display_tab");
}
function display_child3() {
  child2.classList.remove("display");
  child3.classList.add("display");
  child1.classList.remove("display");
  child4.classList.remove("display");
  content1.classList.remove("display_tab");
  content2.classList.remove("display_tab");
  content3.classList.add("display_tab");
  content4.classList.remove("display_tab");
}
function display_child4() {
  child3.classList.remove("display");
  child4.classList.add("display");
  child1.classList.remove("display");
  child2.classList.remove("display");
  content1.classList.remove("display_tab");
  content2.classList.remove("display_tab");
  content3.classList.remove("display_tab");
  content4.classList.add("display_tab");
}
function display_child1() {
  child3.classList.remove("display");
  child4.classList.remove("display");
  child1.classList.add("display");
  child2.classList.remove("display");
  content1.classList.add("display_tab");
  content2.classList.remove("display_tab");
  content3.classList.remove("display_tab");
  content4.classList.remove("display_tab");
}
// select
