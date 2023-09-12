import Megjelenit from "./Megjelenit.js";
import { TODOLIST2  } from "./adatok.js";
$(function () {
    let tarolo = $(".tarolo");
    new Megjelenit( TODOLIST2, tarolo);

    $(window).on("kesz",function(event){
        console.log(event.detail);

    });
});
