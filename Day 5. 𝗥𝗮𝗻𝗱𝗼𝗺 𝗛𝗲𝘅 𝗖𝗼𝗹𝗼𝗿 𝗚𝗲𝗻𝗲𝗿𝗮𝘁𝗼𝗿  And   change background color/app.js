const hexColor = document.querySelector('.hex-color');
const button = document.querySelector('.btn');


button.addEventListener('click', () => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    hexColor.innerText = color;
    document.body.style.backgroundColor = color;

})
