import {connection} from './databse/connection'//export padrão,necessário definir quaç função ou funções estaão sendo exportadas
import status from './databse/aplicativo' //export defaul, n precisa das chaves, pega automaticamente a funcao definida como default. 
//O nome passado apos a o import é o nome que a função importada assume nesse aqruivo. 
//Só pode have uma função default em cada arquivo

function acessarSistema(){
    connection({ip:"192.168.54.10", name:"Banco de dados"})
}

acessarSistema();

//ou apenas

connection({ip:"192.168.54.10", name:"Banco de dados"})

status();