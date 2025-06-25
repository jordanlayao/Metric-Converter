/*
1 meter = 3.281 feet
1 feet = 0.3048 meter
1 liter = 0.264 gallon
1 gallon = 3.78541 liter
1 kilogram = 2.204 pound
1 pound = 0.453592 kilogram
*/

function formatNumber(value) {
  return parseFloat(value.toFixed(3));
}

let convertBtn = document.querySelector(".convert-button");
let inputValue = document.querySelector(".yourInputId");
let userValueInputs = document.querySelectorAll(".user-value-input");

let poundsValue = document.querySelector(".pounds-value");
let kilosValue = document.querySelector(".kilos-value");
let feetValue = document.querySelector(".feet-value");
let metersValue = document.querySelector(".meters-value");
let gallonsValue = document.querySelector(".gallons-value");
let litersValue = document.querySelector(".liters-value");

const conversionFactors = {
  "meter": 3.281,
  "feet": 0.3048,
  "liter": 0.264,
  "gallon": 3.78541,
  "kilogram": 2.204,
};

/* Convert All User Value Inputs To The Input Value When The Convert Button Is Clicked */
convertBtn.addEventListener("click", function() {
  let value = inputValue.value;
  
  // Update all user input values
  userValueInputs.forEach(function(el) {
    el.textContent = value;
  });
  
  // Example conversions with formatting
  let pounds = formatNumber(value * 2.20462);
  let kilos = formatNumber(value / 2.20462);
  let feet = formatNumber(value * 3.28084);
  let meters = formatNumber(value / 3.28084);
  let gallons = formatNumber(value * 0.264172);
  let liters = formatNumber(value / 0.264172);
  
  // Update the display
  if (poundsValue) poundsValue.textContent = pounds;
  if (kilosValue) kilosValue.textContent = kilos;
  if (feetValue) feetValue.textContent = feet;
  if (metersValue) metersValue.textContent = meters;
  if (gallonsValue) gallonsValue.textContent = gallons;
  if (litersValue) litersValue.textContent = liters;
});








