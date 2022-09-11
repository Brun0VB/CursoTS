interface JogoProps{
    readonly id: string;
    nome: string;
    descr: string;
    plataforma: string[];
}

const naruto: JogoProps = {
    id: "1223",
    nome: "Naruto",
    descr : "Jogo de luta",
    plataforma: ["PC","Xbox","Ps4"],
}

interface DLCProps extends JogoProps{ //herda todas as propriedades de JogoProps
    Original: JogoProps;//pede que o jogo original com seu id nome descr e plataforma seja inserido junto com DLC
    novoConteudo: string[];
}

const NarutoDLC: DLCProps = { 
    Original: naruto,
    id: "12234",
    nome: "NarutoDLC",
    descr : "Novos personagens",
    plataforma: ["PC","Xbox","Ps4"],
    novoConteudo: ["desafios", "gaara", "sasuke"],
}
