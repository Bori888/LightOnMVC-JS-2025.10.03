import LampakModell from "../modell/LampakModell.js";   // modell mappa
import JatekterView from "../view/JatekterView.js";      // view mappa


export default class JatekterController {
    #modell;
    #view;

    constructor(szuloElem) {
        this.#modell = new LampakModell();
        this.#view = new JatekterView(
            szuloElem,
            this.#modell.getLampak(),
            this.lampaKattintas.bind(this) // eseménykezelő a kattintásokra
        );
    }

    lampaKattintas(i, j) {
        // modell állapot váltás
        this.#modell.kapcsol(i, j);

        // nézet frissítése
        this.#view.frissit(this.#modell.getLampak());

        // győzelem ellenőrzése
        if (this.#modell.nyertE()) {
            alert("🎉 Nyertél! 🎉");
        }
    }
}
