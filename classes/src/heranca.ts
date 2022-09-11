/*modificadores de acesso:
    public ou nada = acessado em todos os lugares e por qualquer um
    private: so pode ser mexido ou acessada dentro da propia classe
    protected: pode ser mexida ou acessada somente pela propria classe ou pelas classes filhas
    readonly: somente para atributos. Não pode ser modificado nem pela propri classe. POde ser acessada em qualquer lugar

*/ 

class Usuario{
    protected id: number;
    nome: string;
    email: string;

    constructor(id: number,nome: string, email:string){
        this.nome = nome;
        this.email = email;
        this.id = id;
    }



}  
//classe filha herda todos os atributos e metodos da classe pai 
class Admin extends Usuario{//determinando que a classe Adsmin é filha de Usuario
    
    cargo: string;
    nivel: number;

    constructor(id:number,nome: string, email:string, cargo:string, nivel:number){
        super(id,nome,email);//cosntrutor da classe pai. DEVE sempre vir primeiro
        this.cargo = cargo;
        this.nivel = nivel;
    }

    mudarCargo():void{
        console.log("Alterando Cargo")
        //id é acessível aqui
    }
}

const adm1 = new Admin(123,"Bruno","brunovilela2002@hotmia.com","Aluno",0);

//adm1.id; id não eh acessível aqui