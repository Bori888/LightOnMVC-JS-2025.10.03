import LampakView from "./LampakView.js";

export default class JatekterView {
    #lampakView;

    constructor(szuloElem, lampak, esemenyKezelo) {
        // teljes játéktér törlése, majd újrarajzolás
        szuloElem.innerHTML = "";
        this.#lampakView = new LampakView(szuloElem, lampak, esemenyKezelo);
    }

    frissit(lampak) {
        this.#lampakView.frissit(lampak);
    }
}
