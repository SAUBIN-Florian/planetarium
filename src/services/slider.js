const initSlider = (element) => {
  const slider = document.querySelector(element);
  const slides = Array.from(slider.children);
  // const slidesHeight = slides[0].getBoundingClientRect().height;

  slides.forEach((slide) => {
    slide.style.transform = `translateY(-100%)`
  })
}

export { initSlider };