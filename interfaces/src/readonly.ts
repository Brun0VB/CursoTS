interface ProdutoProps{
    readonly id:string;//id não pode ser laterada
    nome:string;
    descricao: string;
}

let produto1:ProdutoProps ={
    id: "1",
    nome:"bola",
    descricao:"quadrada",
}

//produto1.id ="123"; atribução proibida
produto1.descricao = "redonda";//atribuição permitida
console.log(produto1);

