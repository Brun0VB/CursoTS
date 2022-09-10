let statusAtual: unknown = 1;

let mudastatus: number = 0;

mudastatus =  statusAtual as number; //garante que statusAtual eh um número

console.log(mudastatus);

statusAtual = 15;
//2 maneira de afirmar tipo
mudastatus = <number>statusAtual;
console.log(mudastatus);

