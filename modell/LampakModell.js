export default class LampakModell {

    #lampakLista = [];
    #meret = 3;

    constructor() {

        this.lampakListaFeltolt();

    }
    lampakListaFeltolt() {
        this.#lampakLista = [];
        for (let i = 0; i < this.#meret; i++) {
            let sor = [];
            for (let j = 0; j < this.#meret; j++) {
                sor.push(true);
            }
            this.#lampakLista.push(sor);
        }
    }

    getLampak() {
        return this.#lampakLista;
    }

    kapcsol(i, j) {
        const iranyok = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]];
        iranyok.forEach(([x, y]) => {
            let ni = i + x, nj = j + y;
            if (ni >= 0 && ni < this.#meret && nj >= 0 && nj < this.#meret) {
                this.#lampakLista[ni][nj].valt();
            }
        });
    }

    nyertE() {
        return this.#lampakLista.every(sor =>
            sor.every(lampa => lampa.getAllapot() === false)
        );
    }
}
