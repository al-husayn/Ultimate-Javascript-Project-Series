let rangeSlider = document.querySelector('.range-slider');
let result = document.querySelector('.result');

console.log(rangeSlider);
console.log(result);


rangeSlider.addEventListener('input',  ()=>{
    result.style.borderWidth  = rangeSlider.value + 'px';
})