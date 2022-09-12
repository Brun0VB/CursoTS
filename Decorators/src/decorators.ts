//target reeceb o construtor da classe
// function logInfo(target:any){
//     console.log(target);
// }

// //decortator que retorna uma mensagem de criação do próprio decorator
// //chamado Design patern
// function logInfo(mensagem:string){
//     return(target:any)=>{
//         console.log(target+mensagem);
//     }
// }

// @logInfo("sistema onine")//roda automaticamente quando criado dentro do arquivo
// class Sistema{

// }
function setIpServidor(novoIp:string){
    return(target:any)=>{
        return class extends target{
            ip = novoIp;
        }
    }
}

@setIpServidor("555.555.555")
class Servidor{

}

const server1 = new Servidor();

console.log(server1);
