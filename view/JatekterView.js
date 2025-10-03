import LampakView from "./LampakView.js";

export default class JatekterView {
    #lampakView;

    constructor(szuloElem, lampak, esemenyKezelo) {
        // a játéktér fő konténere
        this.#lampakView = new LampakView(szuloElem, lampak, esemenyKezelo);
    }

    frissit(lampak) {
        this.#lampakView.frissit(lampak);
    }
}
