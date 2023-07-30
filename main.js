let numberInput = document.querySelector("input");
let result = document.querySelector("div");

numberInput.addEventListener("input", function() {
  result.innerHTML = `{${numberInput.value}} USD Dollar = {${(numberInput.value * 15.6).toFixed(2)}} Egyptian Pound`;
})