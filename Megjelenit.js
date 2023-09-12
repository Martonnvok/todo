import MegjelenitSor from "./MegjelenitSor.js";
class Megjelenit {
    #lista = [];
    constructor(lista, szuloElem) {
        this.#lista = lista;
        szuloElem.append('<table class="table table-bordered table-strepted"></table>');
        this.tablaElem = szuloElem.children("table");
        this.megjelenites();
        $(window).on("megjelenit",(event) => {
            event.detail.remove();
        });
    }

    megjelenites() {


        this.#lista.forEach((elem) => {
            new MegjelenitSor(elem, this.tablaElem);

        });

    }
}

export default Megjelenit