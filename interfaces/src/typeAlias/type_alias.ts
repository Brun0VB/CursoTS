type UUID = string|number|null;//Isto é Type alias

function acessar(uuid: UUID, nome: string): void{
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}

function logUser(uuid:UUID){
    console.log(`conta referente a UUID: ${uuid}`)
}

// acessar(123,"Bruno");

// logUser("123");
type MOEDAS = "BRL"|"EUR"|"USD";

function compraritem(moeda:MOEDAS){
    console.log('Moeda usada:',moeda)
}

compraritem("EUR");