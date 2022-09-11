type INFO = {
    id: string;
    nome: string;
    descr: string;
}

const produtoInfo: INFO = {
    id: "123",
    nome: "placa de video",
    descr: "GTX3060"
}

type CATEGORIA={
    slug: string;
    quantidade: number;
}

const cat1: CATEGORIA = {
    slug: "hardware",
    quantidade: 2
}

//console.log(cat1);

type PROD = INFO & CATEGORIA; //une os dois tipos criados

const novo: PROD = {
    id:"123",
    nome:"Teclado",
    descr: "RAZER",
    slug: "mecânico,RGB",
    quantidade: 100,
}

console.log(novo);
