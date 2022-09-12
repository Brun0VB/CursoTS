function validaNome(tamanho:number){
    return(target:any,key:string)=>{//terget=construtuor e key=propriedade
        let valor = target[key];

        const getter = () =>valor;

        const setter = (value:string)=>{
            if(value===""){
                console.log("Você não pode colocar o nome vazio");
            }else if(value.length < tamanho){
                console.log("Tamanho insuficiente")
            }else{
                valor = value;
            }


        }            
        Object.defineProperty(target,key,{
                get: getter,
                set: setter
        })
    }
}

class Jogo{
    @validaNome(5)
    nome: string;

    constructor(nome:string){
        this.nome = nome;
    }
}

const jogo1 = new Jogo("L4D")

console.log(jogo1.nome)