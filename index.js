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
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");
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

  function move(direction) {
    // Clear classes
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction == "back") {
      // Make new array of new values, and destructure them over into the prev, current, and next variables
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild, // if no slide get the last slide
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild, // loop around and get the first
      ];
    }

    applyClasses();
  }

  startSlider();
  applyClasses();

  // Event listeners
  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);
}

const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
