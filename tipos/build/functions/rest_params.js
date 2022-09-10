"use strict";
function totalVendas(venda1, venda2) {
    const total = venda1 + venda2;
    return total;
}
function totalVar(...vendas) {
    const quantidade = vendas.length;
    let total = 0;
    console.log(`Você fez ${quantidade} vendas hoje`);
    vendas.map(venda => {
        total += venda;
    });
    console.log("total das vendas= " + total);
    return quantidade;
}
totalVar(12, 12, 12, 32, 42);
