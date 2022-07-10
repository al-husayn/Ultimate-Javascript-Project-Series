"use strict"

let cards = document.querySelectorAll(".card");


for (const card of cards) {
    card.addEventListener("click", ()=> {
        removeActiveClass();
        // Add the active class from all cards
        card.classList.add("active");
    });
}

// Remove the active class from all cards

const  removeActiveClass =()=> {
    for (const card of cards) {
        card.classList.remove("active");
    }
}
