/*
1 meter = 3.281 feet
1 feet = 0.3048 meter
1 liter = 0.264 gallon
1 gallon = 3.78541 liter
1 kilogram = 2.204 pound
1 pound = 0.453592 kilogram
*/

// Check if GSAP is loaded
if (typeof gsap === 'undefined') {
  console.error('GSAP is not loaded!');
} else {
  console.log('GSAP is loaded successfully!');
}

function formatNumber(value) {
  return parseFloat(value.toFixed(3));
}

// Smooth number counting animation
function animateNumber(element, toValue, duration = 1000) {
  const fromValue = parseFloat(element.textContent) || 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = fromValue + (toValue - fromValue) * progress;
    element.textContent = formatNumber(current);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Store all conversion factors in an object
const conversionFactors = {
  pounds: 2.20462,
  kilos: 1/2.20462,
  feet: 3.28084,
  meters: 1/3.28084,
  gallons: 0.264172,
  liters: 1/0.264172
};

// Store all DOM elements in an object
const elements = {
  pounds: document.querySelector(".pounds-value"),
  kilos: document.querySelector(".kilos-value"),
  feet: document.querySelector(".feet-value"),
  meters: document.querySelector(".meters-value"),
  gallons: document.querySelector(".gallons-value"),
  liters: document.querySelector(".liters-value")
};

let convertBtn = document.querySelector(".convert-button");
let inputValue = document.querySelector(".yourInputId");
let userValueInputs = document.querySelectorAll(".user-value-input");

convertBtn.addEventListener("click", function() {
  let value = parseFloat(inputValue.value);
  
  // Update all user input values
  userValueInputs.forEach(function(el) {
    el.textContent = value;
  });
  
  // Animate all converted values
  Object.keys(conversionFactors).forEach(function(unit) {
    if (elements[unit]) {
      let convertedValue = value * conversionFactors[unit];
      animateNumber(elements[unit], convertedValue, 1000);
    }
  });
});










