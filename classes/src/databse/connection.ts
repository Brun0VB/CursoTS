type Connection={
   ip: string;
   name: string;
}

export function connection(info: Connection):boolean{
    console.log("Connexão realizada com sucesso: ", info.ip);
    return true;
}