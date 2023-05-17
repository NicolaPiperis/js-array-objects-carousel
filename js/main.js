// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvels Spiderman Miles Morale',
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
        text: 'Marvels Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// VARIABILI GLOBALI
const container = document.getElementById("container");
const containerImg = document.querySelectorAll(".container_img");
let imagePosition = 0;

// Creare un carosello come nella foto allegata.
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
images.forEach((element, index) => {

    // DESTRUTTURAZIONE
    let {image, title, text} = element;

    // CREAZIONE ELEMENTO HTML DEL CONTENUTO PRINCIPALE
    let card = 
    `<div class="container_img hidden">

    <div id="next" class="container_icon_up"><i class="fa-solid fa-arrow-up" style="color: #1e3050;"></i></div>
    
         <img src="${image}">  

    <div id="prev" class="container_icon_down"><i class="fa-solid fa-arrow-down"></i></div>

    <div class="text">
        <h2>${title}</h2>
        <p>${text}</p>
    </div>

    </div>`

    // IMMETTO IL CONTENUTO PRINCIPALE NEL DOM E ATTRAVERSO IL CICLO MI OCCUPO DI CREARE TANTE IMMAGINI QUANTI OGGETTI ALL'INTERNO DELL'ARRAY
    container.innerHTML += card;
    }
)
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
for(let i = 0; i < images.length; i++) {   
    
    let containerImgIesimo = containerImg[i];
    if(i === imagePosition) {
        containerImgIesimo.classList.remove("hidden");
        containerImgIesimo.classList.add("active");
    } 
}

// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.




// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.