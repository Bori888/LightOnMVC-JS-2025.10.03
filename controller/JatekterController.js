import LampakModell from "../modell/LampakModell.js";
import JatekterView from "../view/JatekterView.js";

export default class JatekterController {
    #modell;
    #view;
    #ujGomb;

    constructor(szuloElem) {
        this.#modell = new LampakModell();
        this.#view = new JatekterView(
            szuloElem,
            this.#modell.getLampak(),
            this.lampaKattintas.bind(this)
        );

        this.#ujGomb = document.getElementById("ujrainditas");
        this.#esemenyKezeles(); // külön metódusban regisztráljuk az eseményeket
    }

    /**
     * Események hozzárendelése
     */
    #esemenyKezeles() {
        this.#ujGomb.addEventListener("click", () => {
            this.ujJatek();
        });
    }

    /**
     * Lámpa kattintás esemény kezelése
     */
    lampaKattintas(i, j) {
        this.#modell.kapcsol(i, j);
        this.#view.frissit(this.#modell.getLampak());
        this.#nyertEllenorzes();
    }

    /**
     * Új játék indítása
     */
    ujJatek() {
        this.#modell.lampakListaFeltolt(); 
        this.#view.frissit(this.#modell.getLampak());
    }

    /**
     * Ellenőrzi, hogy nyert-e a játékos
     */
    #nyertEllenorzes() {
        if (this.#modell.nyertE()) {
            alert("🎉 Nyertél! 🎉");
        }
    }
}
