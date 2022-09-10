"use strict";
function cadastro(email, senha, nome, idade = 18) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@ok.com", "123");
