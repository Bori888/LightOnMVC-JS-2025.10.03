export default class LampakView {
    #lampakView = [];

    constructor(szuloElem, lampak, esemenyKezelo) {
        szuloElem.innerHTML = "";
        this.#lampakView = [];

        lampak.forEach((sor, i) => {
            let sorElem = document.createElement("div");
            sorElem.classList.add("sor");
            szuloElem.appendChild(sorElem);

            let sorView = [];
            sor.forEach((allapot, j) => {
                let div = document.createElement("div");
                div.classList.add("lampa");
                if (allapot) {
                    div.classList.add("on");
                }
                sorElem.appendChild(div);

                div.addEventListener("click", () => {
                    esemenyKezelo(i, j);
                });

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
