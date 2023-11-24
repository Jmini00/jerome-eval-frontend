
const cars = [
    {
        "image":"vehicule1.png",
        "model":"Peugeot 208",
        "description":"Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire)",
        "prix":"999€",
        "agence":"Agence de Paris"
    },
    {
        "image":"vehicule2.png",
        "model":"Ford Focus",
        "description":"Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire)",
        "prix":"999€",
        "agence":""

    },
    {
        "image":"vehicule3.png",
        "model":"Audi A1",
        "description":"Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0,55/km supplémentaire)",
        "prix":"1100€",
        "agence":"Agence de Paris"

    },
    {
        "image":"vehicule4.png",
        "model":"Opel Mokka",
        "description":"Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0,4/km supplémentaire)",
        "prix":"1150€",
        "agence":"Agence de Paris"

    }
];

const menuSlider = document.getElementById('menu-slider');
const btSlider = document.querySelector('.container');
let i = 0;
btSlider.addEventListener('click', (e) => {
    btSlider.classList.toggle('change');

    if (i === 0) {
        menuSlider.style.animation = "anim-slider-on .7s forwards";
        i = 1;
    } else {
        menuSlider.style.animation = "anim-slider-off .7s forwards";
        i = 0;
    }

})