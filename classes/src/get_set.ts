class Jogo{
    private servidor: string;
    private id: string = "1234";

    constructor (servidor:string){
        this.servidor = servidor;
    }

    //acessa o atributo, mantendo-o protegido
    get getServidor(){
        return this.servidor;
    }
 
    //altera algum atributo
    set setServidor(novoIp:string){
        this.servidor = novoIp;
    }
}

const sf5 = new Jogo("192.367.23.2");

console.log(sf5.getServidor);//exemplo de uso do getter
// um método get é chamdo como se fosse um atributo, não um método em si

console.log(sf5.setServidor = "198.162.0.0");