"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const buttonSoma = document.getElementById('buttonSomar');
const buttonSub = document.getElementById('buttonSubtrai');
function Operar(valores) {
    if (valores.tipo === "Somar") {
        return valores.a + valores.b;
    }
    else if (valores.tipo === "Subtrair") {
        return valores.a - valores.b;
    }
}
buttonSoma.addEventListener('click', function () {
    const resultado = Operar({
        tipo: "Somar",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
});
buttonSub.addEventListener('click', function () {
    const resultado = Operar({
        tipo: "Subtrair",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(resultado);
});
