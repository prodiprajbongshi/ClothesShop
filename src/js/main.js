 
// ================= HERO SLIDER   =================
var cont = 0;
var xx;

function loopSlider() {
  xx = setInterval(function () {
    if (cont === 0) {
      $("#slider-1").fadeOut(400);
      $("#slider-2").delay(400).fadeIn(400);

      $("#sButton1").removeClass("bg-gray-800").addClass("bg-gray-400");
      $("#sButton2").removeClass("bg-gray-400").addClass("bg-gray-800");

      cont = 1;
    } else {
      $("#slider-2").fadeOut(400);
      $("#slider-1").delay(400).fadeIn(400);

      $("#sButton2").removeClass("bg-gray-800").addClass("bg-gray-400");
      $("#sButton1").removeClass("bg-gray-400").addClass("bg-gray-800");

      cont = 0;
    }
  }, 8000);
}

function reinitLoop(time) {
  clearInterval(xx);
  setTimeout(function () {
    loopSlider();
  }, time);
}

function sliderButton1() {
  $("#slider-2").fadeOut(400);
  $("#slider-1").delay(400).fadeIn(400);

  $("#sButton2").removeClass("bg-gray-800").addClass("bg-gray-400");
  $("#sButton1").removeClass("bg-gray-400").addClass("bg-gray-800");

  cont = 0;
  reinitLoop(4000);
}

function sliderButton2() {
  $("#slider-1").fadeOut(400);
  $("#slider-2").delay(400).fadeIn(400);

  $("#sButton1").removeClass("bg-gray-800").addClass("bg-gray-400");
  $("#sButton2").removeClass("bg-gray-400").addClass("bg-gray-800");

  cont = 1;
  reinitLoop(4000);
}

$(document).ready(function () {
  $("#slider-2").hide();

  $("#sButton1").addClass("bg-gray-800");
  $("#sButton2").addClass("bg-gray-400");

  loopSlider();
});


// ================= BLOG SLIDER   =================
let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }

  slides[slideIndex - 1].classList.remove("hidden");
}
 