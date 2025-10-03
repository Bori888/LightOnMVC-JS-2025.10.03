import LampakModell from "../modell/LampakModell.js";
import JatekterView from "../view/JatekterView.js";

export default class JatekterController {
    #modell;
    #view;

    constructor(szuloElem) {
        this.#modell = new LampakModell();
        this.#view = new JatekterView(
            szuloElem,
            this.#modell.getLampak(),
            this.lampaKattintas.bind(this)
        );

        // Új játék gomb
        const ujGomb = document.getElementById("ujrainditas");
        ujGomb.addEventListener("click", () => {
            this.ujJatek();
        });
    }

    lampaKattintas(i, j) {
        this.#modell.kapcsol(i, j);
        this.#view.frissit(this.#modell.getLampak());

        if (this.#modell.nyertE()) {
            alert("🎉 Nyertél! 🎉");
        }
    }

    ujJatek() {
        this.#modell.lampakListaFeltolt(); // új állapot
        this.#view.frissit(this.#modell.getLampak());
    }
}
