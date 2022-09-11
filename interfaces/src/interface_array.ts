// interface testeProps{
//     id:string;
//     nome:string;
//     slug: string[]; //prop array de string
// }

// let tec1: testeProps={
//     id:"1",
//     nome:"php",
//     slug: ["piu","piu","píe"],
// }

interface testeProps{
    id:string;
    nome:string;
    descr?: string;
}

interface NomeProps{
    tecs: testeProps[]; // criando um array de objetos que possuem id, nome e decr
}

let front:NomeProps={
    tecs:[
        {id: "12", nome:"ReactJS", descr:"Ensinado React"},
        {id: "13", nome:"NodeJS",}
    ]
    
}

console.log(front.tecs);