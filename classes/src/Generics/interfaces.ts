interface novoProduto<V>{//generics em intefaces
    nome:string;
    preco:V;
}

const arroz: novoProduto<number> = {//tipando o generics criado
    nome:"arroz branco",
    preco: 12,
}
console.log(arroz);

type novoProdutoTA<V>={//generics em types
    nome:string;
    preco:V;
}

const arroz2: novoProduto<number> = {//tipando o generics criado
    nome:"arroz preto",
    preco: 25,
}
console.log(arroz);