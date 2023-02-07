// ARRAY FOTO

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// OGGETTI DEL DOM

const carouselEl = document.querySelector(".carousel");
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");

// FUNZIONE CAROSELLO



for (i = 0; i < images.length; i++) {

    const currentImage = images[i];

    let slideClasses = "image";

    if (i == 0) {
        slideClasses += "active"
    }

    const slide = `
	<img class="${slideClasses}" src="${currentImage[i].image}" alt="">
	`;

    carouselEl.innerHTML += slide;
}
