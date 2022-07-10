"use strict"

let cards = document.querySelectorAll(".card");


for (const element of cards) {
    element.addEventListener("click", ()=> {
        removeActiveClass();
        // Add the active class from all cards
        element.classList.add("active");
    });
}

// Remove the active class from all cards

const  removeActiveClass =()=> {
    for (const element of cards) {
        element.classList.remove("active");
    }
}
