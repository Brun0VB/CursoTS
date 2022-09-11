class Conta{
    private limite:number =450;//somente acessível aqui dentro dessa classe. Não acessível nem para classes filhas

    private aumentaLimite(quantidade: number){
        if(quantidade<1000){
            this.limite = quantidade+450;          
        }
    }
    
    solicitarLimite(autenticado:boolean, quantidade:number): void|boolean{
        if(autenticado){
            this.aumentaLimite(quantidade);
        }else{
            return false;
        }
    }
}

const fulano = new Conta();

//fulano.limite não é acessivel aqui
//fulano.aumentaLimite não é acessível aqui
fulano.solicitarLimite(true,3465);