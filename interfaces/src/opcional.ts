interface CadastroProps{
    nome?:string;// o caractere ? indica que a propriedade é opcional
    email:string;
    status:boolean;
}

const novoUsuario: CadastroProps={
    email: "brunovilela2002@hotmail.com",
    status:true,
}

console.log(novoUsuario);

function novoUser({nome,email,status}:CadastroProps){
    console.log(nome);
}
function novoUserAlt(props:CadastroProps){
    console.log(props.nome);
}

novoUser({email:"TESTE",status:false});