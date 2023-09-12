class MegjelenitSor {
    #obj = [];
    constructor(obj, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#sor();
        this.sorElem = szuloElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torlesElem = this.sorElem.children("td").children(".megse");
        this.kukaElem = this.sorElem.children("td").children(".torles");

        this.kukaElem.on("click", () => {
            this.esemenyTrigger("megjelenit");
        });
        this.torlesElem.on("click", () => {
            $(this.sorElem).css("background-color", "red");

        });
        this.keszElem.on("click", () => {
            $(this.sorElem).css("background-color", "green");
            $(this.sorElem).attr("class","megse");
            this.keszElem("🍙");

        });
    }

    #sor() {
        let txt = `<tr>`;
        for (const kulcs in this.#obj) {
            txt += "<td>" + this.#obj[kulcs] + "</td>";

        }
        txt += `<td><span class = "kesz">✔</span> <span class = "torles">🍔</span></td>`
        txt += `</tr>`;
        this.szuloElem.append(txt);
    }

    esemenyTrigger(esemenyNev) {
        const E = new CostumeEvent(esemenyNev, { detail: this.sorElem });
        window.dispatchEvent(E);
    }



}

export default MegjelenitSor;