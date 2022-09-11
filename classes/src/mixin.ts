//Para aplicar mixin: ter o arquivo aplyMixin(pego na documentação do Ts->Alternative Pattern->ultimoBloco); defini-lo com export; importar no arquivo desenvolvido(aqui no caso linha 5);criar uma inteface com extends para as classes desejadas duas classes; chamar o metodo applyMixins com atenção aos parametros



import {applyMixins} from './mixin/aplyMixin';

class Automovel{
    ligar():void{
        console.log("Automovel ligado");
    }
    desligar():void{
        console.log("Automovel desligado");
    }
}

class Especifica{
    descricao:string;

    constructor(descricao:string){
        this.descricao = descricao;
    }
}

class Carro {
    nome: string;
    

    constructor(nome:string){
        this.nome = nome;
    }
}

interface Carro extends Automovel,Especifica{}

applyMixins(Carro,[Automovel,Especifica]);

const gol = new Carro("Gol 1.6");