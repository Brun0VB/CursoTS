//interface com funcoes
interface CursoProp{
    id: string;
    name: string;
    preco: number;
    promote:(preco:number)=>void; //funcao como propriedade
}

function Promo (preco:number):void{
    console.log(preco);
}

const novoCurso:CursoProp={
    id:"1",
    name: "CursoV2",
    preco: 750,
    promote: Promo,//funcao atribuida à propriedade
}

console.log(novoCurso.promote(234));
