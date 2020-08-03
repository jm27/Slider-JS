function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }
  // Create some variables to use from slider
  let current;
  let prev;
  let next;
  // Select needed Elements from slider
  const slides = slider.querySelector(".slides");
  const prevButton = document.querySelector("goToPrev");
  const nextButton = document.querySelector("goToNext");
  console.log(slides);

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  startSlider();
  applyClasses();
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
