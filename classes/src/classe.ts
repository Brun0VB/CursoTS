type Status = "Aberto"|"Fechado";

class Loja{
    //atributos
    nome: string;
    categoria:string;

    //construtor
    constructor(nome:string,categoria:string){
        this.nome = nome;
        this.categoria = categoria;
    }

    //métodos
    criarLoja(): void{
        console.log(`Loja ${this.nome}, categoria ${this.categoria}`)
    }

    emitir(mesa:number):string{
        return `Atenção ${this.nome} Pedido na mesa: ${mesa}`
    }

    mudarStatus(status: Status): void{
        if(status === "Aberto"){
            console.log(this.nome+" Aberta com sucesso");
        }else{
            console.log(this.nome+" Fechada com sucesso");
        }
    }
}

const Burguer = new Loja("BK","Lanchonete");
const Burguer2 = new Loja("MC","Lanchonete");
Burguer.criarLoja();
Burguer2.criarLoja();
console.log(Burguer.emitir(32));
Burguer.mudarStatus("Fechado");
//console.log(Burguer.nome + Burguer.categoria);