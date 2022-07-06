const result = document.querySelector('.result');
const button = document.querySelector('.button');


button.addEventListener('click', ()=>{
    
    result.innerText = Math.trunc(Math.random() * 101)
    
})




