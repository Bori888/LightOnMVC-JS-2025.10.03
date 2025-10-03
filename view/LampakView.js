export default class LampakView {
    #lampakView = [];

    constructor(szuloElem, lampak, esemenyKezelo) {
        this.#lampakView = [];
        szuloElem.innerHTML = "";

        lampak.forEach((sor, i) => {
            let sorView = [];
            sor.forEach((allapot, j) => {
                const div = document.createElement("div");
                div.classList.add("lampa");
                if (allapot) div.classList.add("on");

                div.addEventListener("click", () => {
                    esemenyKezelo(i, j);
                });

                szuloElem.appendChild(div);
                sorView.push(div);
            });
            this.#lampakView.push(sorView);
        });
    }

    frissit(lampak) {
        lampak.forEach((sor, i) => {
            sor.forEach((allapot, j) => {
                this.#lampakView[i][j].classList.toggle("on", allapot);
            });
        });
    }
}
