// script.js
const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');
const debounceTime = 100; // milliseconds

function handleSliderChange() {
  const value = sliderInput.value;
  // Perform actions based on the slider value (e.g., change image size)
  sliderImage.style.width = `${value}px`;
}

// Use lodash debounce to limit the frequency of the function call
const debouncedHandleSliderChange = _.debounce(handleSliderChange, debounceTime);

sliderInput.addEventListener('input', debouncedHandleSliderChange);
