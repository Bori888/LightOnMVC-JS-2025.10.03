import JatekterController from "./controller/JatekterController.js"; // controller, nem controllers

document.addEventListener("DOMContentLoaded", () => {
    const szuloElem = document.querySelector(".jatekter");
    new JatekterController(szuloElem);
});
