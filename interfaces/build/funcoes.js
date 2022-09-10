"use strict";
function Promo(preco) {
    console.log(preco);
}
const novoCurso = {
    id: "1",
    name: "CursoV2",
    preco: 750,
    promote: Promo,
};
console.log(novoCurso.promote(234));
