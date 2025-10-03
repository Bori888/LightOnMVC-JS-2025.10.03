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
                // véletlenszerű állapot: fel vagy le
                sor.push(Math.random() < 0.5);
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
                this.#lampakLista[ni][nj] = !this.#lampakLista[ni][nj];
            }
        });
    }

    nyertE() {
        return this.#lampakLista.every(sor =>
            sor.every(lampa => lampa === false)
        );
    }
}
