// let loja:object;

// loja={
//     nome: "BK",
//     endereco: "Rua X",
//     status: true,
// }


//O que é inteface? É um padrão que um objeto deve serguir 
interface ILojaProps{
    nome: string;
    endere: string;
    status: boolean;
}

const BurguerK: ILojaProps = {
    nome: "Burguer K",
    endere: "Rua 2",
    status: true,
}
console.log(BurguerK);


function novaLoja({nome,endere,status}:ILojaProps):void{ //criando uma função a partir de um objeto com interface como parametro
//Ctrl+espaço da todos as propriedades do objeto a ser construido
    console.log(nome);
    console.log(endere);
    console.log(status);
    console.log("===============");
}

novaLoja({nome:"ReBruno",endere:"Logo ali",status: true}); //qualquer nova loja tem que seguir o padrão de propriedas definido