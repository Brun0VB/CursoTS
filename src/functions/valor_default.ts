function cadastro(email:string, senha:string, nome?:string, idade:number = 18 ):void{ // o caratere ? indica que a variavel pode ser undefined
    let data = {email,senha,nome,idade};
    console.log(data);
}


cadastro("teste@ok.com","123");// nome indefinido e idade vem como o valor padrao definido diretamente na declaração da função