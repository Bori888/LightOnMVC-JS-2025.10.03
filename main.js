import JatekterController from "./controllers/JatekterController.js";

document.addEventListener("DOMContentLoaded", () => {
    const szuloElem = document.querySelector(".jatekter");
    new JatekterController(szuloElem);
});
