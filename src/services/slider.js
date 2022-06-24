const initSlider = (element, time) => {
  const slider = document.querySelector(element);
  const slides = Array.from(slider.children);

  let counter = 0;

  setInterval(() => {  
    if(slides.length === counter){
      counter = 0;
      slides.forEach(img => img.dataset.view = "hidden");
    };
    slides[counter].dataset.view = "show";
    counter++;
  }, time);
}

export { initSlider };