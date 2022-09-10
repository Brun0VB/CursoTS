//comentario para testar remoção feita pelo tsconfig
//tipagem dinamica

let curso = "typeScript";
curso = "NodeJS";
//curso=150; não aceita let esta inferindo o tipo, no caso, string, logo curso so aceita strings
console.log(curso);