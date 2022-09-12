function repositorio<T>(){//definicao de generics
    let dados:T;//utilização do generics
    function getDados(){
        return dados;
    }
    function setDados(novoDado:T){
        dados = novoDado;
    }
    return{getDados,setDados}
}
function repositorioRigido<T extends string|number>(){//definicao de generics específicando quais os tipos possíveis que T pode receber 
    let dados:T;//utilização do generics
    function getDados(){
        return dados;
    }
    function setDados(novoDado:T){
        dados = novoDado;
    }
    return{getDados,setDados}
}


const repo1 = repositorio<string>();//repo1 soh aceita string
const repo2 = repositorio<number>();//repo2 soh aceita number
repo2.setDados(15);
repo1.setDados("15");


console.log(repo1.getDados())
console.log(repo2.getDados())