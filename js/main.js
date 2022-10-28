import { Slider } from "./slider.js";
const d = document;
const slider1 = new Slider(d, "picture", "block")
const slider2 = new Slider(d, ".hero-text .text", "flex");


const showHiddenMenu = () => {
    const $menu = d.querySelector(".menu-tabs");
    $menu.classList.toggle('show-menu')

}

const showBackgroundMenu = () => {

    const $menuBackground=d.querySelector(".filter");
    $menuBackground.classList.toggle('show-filter');

}

d.addEventListener("DOMContentLoaded", (e) => {

    slider1.sliders(slider1.initialIndex);
    slider2.sliders(slider2.initialIndex);

})

d.addEventListener("click", (e) => {

    if (e.target.matches('.button-left')) {
        slider1.buttonLeft();
        slider2.buttonLeft();
    }
    if (e.target.matches(".button-right")) {
        slider1.buttonRight();
        slider2.buttonRight();
    }
    if (e.target.matches(".menu-hamburguer")) {
        showHiddenMenu();
        showBackgroundMenu();
    }
    if (e.target.matches(".menu-close")) {
        showHiddenMenu();
        showBackgroundMenu(); 
    }


});

d.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft") {
        slider1.buttonLeft();
        slider2.buttonLeft();
    }
    if (e.key === "ArrowRight") {
        slider1.buttonRight();
        slider2.buttonRight();
    }

})
