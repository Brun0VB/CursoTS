const input1 = document.getElementById('num1')as HTMLInputElement;
const input2 = document.getElementById('num2')as HTMLInputElement;
const buttonSoma = document.getElementById('buttonSomar')as HTMLElement;
const buttonSub = document.getElementById('buttonSubtrai')as HTMLElement;

type Operações = "Somar"|"Subtrair"

interface Valores{
    tipo: Operações
    a: number;
    b: number;
}//interface para os vlaores

// function somar(valor: Valores):number{
//     return valor.a+valor.b;
// }//função com interface

function Operar(valores:Valores){
    if(valores.tipo ==="Somar"){
        return valores.a+valores.b;
    }else if(valores.tipo === "Subtrair"){
        return valores.a-valores.b;
    }
}

buttonSoma.addEventListener('click',function(){
    const resultado = Operar({
        tipo: "Somar",
        a: Number(input1.value),
        b: Number(input2.value),
    }) //passando os parametros fa funçao que exige um objeto
    
    console.log(resultado);
})

// function subtrair(a:number,b:number):number{
//     return a-b;
// }//função recebendo os valores diretamente

buttonSub.addEventListener('click',function(){
    const resultado = Operar({
        tipo: "Subtrair",
        a: Number(input1.value),
        b: Number(input2.value),
    }) //passando os valores diretamente
    //OBS: o método .value sempre retorna uma string, logo necessária conversão
    
    console.log(resultado);
})