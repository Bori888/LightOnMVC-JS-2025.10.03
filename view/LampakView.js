export default class LampakView {
    #lampakView = [];
    #szuloElem;
    #esemenyKezelo;

    constructor(szuloElem, lampak, esemenyKezelo) {
        this.#szuloElem = szuloElem;
        this.#esemenyKezelo = esemenyKezelo;
        this.#lampakView = [];

        this.lampakMegjelenit(lampak); // külön metódus a DOM felépítésére
    }

    /** 
     * DOM létrehozás és megjelenítés
     */
    lampakMegjelenit(lampak) {
        this.#szuloElem.innerHTML = "";
        this.#lampakView = [];

        lampak.forEach((sor, i) => {
            let sorView = [];
            sor.forEach((allapot, j) => {
                const div = document.createElement("div");
                div.classList.add("lampa");
                if (allapot) div.classList.add("on");

                // esemény hozzárendelése
                div.addEventListener("click", () => {
                    this.#esemenyKezelo(i, j);
                });

                this.#szuloElem.appendChild(div);
                sorView.push(div);
            });
            this.#lampakView.push(sorView);
        });
    }

    /**
     * Állapot frissítés a modell alapján
     */
    frissit(lampak) {
        lampak.forEach((sor, i) => {
            sor.forEach((allapot, j) => {
                this.#lampakView[i][j].classList.toggle("on", allapot);
            });
        });
    }
}
