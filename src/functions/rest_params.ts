function totalVendas(venda1:number,venda2:number):number{
    const total = venda1+venda2;
    return total;
} // função que recebe brigatoriamente 2 parametros

function totalVar(...vendas:number[]): number{
    const quantidade = vendas.length;
    let total:number = 0;
    console.log(`Você fez ${quantidade} vendas hoje`)
    vendas.map(venda =>{ //vendas.map acessa todos os valores dentro do array
        total+=venda;
    })
    console.log("total das vendas= "+total);
    return quantidade;
}//função que recebe uma quantidade variavel de parametros

totalVar(12,12,12,32,42);