 
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
 
const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = track.children.length;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("bg-black"));
  dots[index].classList.add("bg-black");
}

// DOT CLICK
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

// AUTO SLIDE (optional)
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 4000);

// INIT
updateSlider();
 