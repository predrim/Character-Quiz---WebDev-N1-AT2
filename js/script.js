import { Pergunta } from "./Pergunta.js";
import { Personagem } from "./Personagem.js";

let page = 1;

let luffy = new Personagem("Luffy", "Masculino", "Vermelho", "Carne", "Liberdade", "Bombeiro", "Macaco", "Esticar-se", "../assets/images/characters/Luffy.png",
    "Monkey D. Luffy é o capitão de borracha dos Piratas do Chapéu de Palha que busca o lendário One Piece para se tornar o Rei dos Piratas. Conhecido por seu otimismo contagiante e apetite insaciável, ele combina uma personalidade ingênua com uma lealdade feroz, sendo capaz de desafiar qualquer poder mundial para proteger seus amigos e garantir a liberdade."
);
let zoro = new Personagem("Zoro", "Masculino", "Verde", "Arroz", "Disciplina", "Policial", "Tigre", "Virar um dragão", "../assets/images/characters/Zoro.png",
    "Roronoa Zoro é o implacável mestre do Estilo de Três Espadas e o primeiro imediato do bando. Movido pela promessa de ser o maior espadachim do mundo, ele é definido por uma disciplina ferrenha e lealdade inabalável a Luffy, atuando como o pilar de seriedade e força bruta da tripulação."
);
let nami = new Personagem("Nami", "Feminino", "Laranja", "Tangerina", "Prudência", "Babá", "Gato", "Disparar raios", "../assets/images/characters/Nami.png",
    "Nami é a genial navegadora dos Chapéu de Palha, cujo sonho é mapear o mundo inteiro. Além de sua inteligência estratégica, ela utiliza o Clima-Tact para controlar o clima em combate, sendo o coração compassivo que equilibra o caos do bando com pragmatismo e coragem."
);
let usopp = new Personagem("Usopp", "Masculino", "Amarelo", "Peixe", "Bravura", "Designer Gráfico", "Camaleão", "Ter um bolso infinito", "../assets/images/characters/Usopp.png",
    "Usopp é o atirador e mestre da inventividade do bando, utilizando precisão e estratégias astutas para vencer. Embora seja o membro mais medroso, ele busca se tornar um bravo guerreiro do mar, provando que a verdadeira coragem é enfrentar o perigo mesmo quando se está morrendo de medo."
);
let sanji = new Personagem("Sanji", "Masculino", "Azul", "Massas", "Devoção", "Cabelereiro", "Cabra", "Intangibilidade", "../assets/images/characters/Sanji.png",
    "Sanji é o mestre cuca da tripulação, um cozinheiro de elite que luta apenas com as pernas para preservar suas mãos. Estrategista brilhante e cavalheiro incorrigível, ele busca o lendário All Blue enquanto protege seus amigos com chutes poderosos e uma paixão ardente."
);
let chopper = new Personagem("Chopper", "Masculino", "Rosa", "Algodão doce", "Inocência", "Professor", "Panda Vermelho", "Super inteligência", "../assets/images/characters/Chopper.png",
    "Tony Tony Chopper é o médico, uma rena que adquiriu consciência humana após comer a Hito Hito no Mi. De grande inocência e coração puro, ele utiliza suas transformações e conhecimentos medicinais para curar seus aliados, sonhando em um dia ser capaz de tratar todas as doenças do mundo."
);
let robin = new Personagem("Robin", "Feminino", "Violeta", "Sanduiche", "Paciência", "Comissário de bordo", "Falcão", "Crescer membros onde quiser", "../assets/images/characters/Robin.png",
    "Nico Robin é a arqueóloga do bando e a única capaz de ler os Poneglyphs para desvendar a História Perdida. Usuária da Hana Hana no Mi, ela floresce partes do corpo em qualquer superfície. De mente fria e introspectiva, encontrou nos Chapéu de Palha o porto seguro que buscou por toda a vida."
);
let franky = new Personagem("Franky", "Masculino", "Azul Claro", "Hamburguer", "Autenticidade", "Piloto de Avião", "Rinoceronte", "Transformar-se em armas", "../assets/images/characters/Franky.png",
    "Franky é o carpinteiro naval ciborgue que construiu e mantém o Thousand Sunny, atual SUUPER navio do bando. Extravagante e emotivo, ele protege o bando com seu corpo blindado e armas embutidas, vivendo sob o lema 'SUPER' enquanto navega rumo ao fim do mundo."
);
let brook = new Personagem("Brook", "Masculino", "Preto", "Chá", "Alegria", "Detetive", "Girafa", "Ressuscitar", "../assets/images/characters/Brook.png",
    "Brook é o músico e esqueleto vivo que retornou à vida graças à Yomi Yomi no Mi. Combinando esgrima clássica com melodias hipnóticas, ele traz alegria à tripulação com suas piadas de caveira, enquanto busca cumprir a promessa de reencontrar a baleia Laboon."
);
let jinbe = new Personagem("Jinbe", "Masculino", "Marrom", "Sushi e Sashimi", "Integridade", "Maquinista", "Urso", "Poder voar", "../assets/images/characters/Jinbe.png",
    "Jinbe é o honrado timoneiro e mestre do Karatê dos Homens-Peixe, atuando como o pilar de sabedoria dos Chapéu de Palha. Com força colossal e controle sobre as águas, ele dedica sua vida a ajudar Luffy a mudar o destino do mundo e promover a paz entre as raças."
);

let personagens = [luffy, zoro, nami, usopp, sanji, chopper, robin, franky, brook, jinbe];

let pergunta1 = new Pergunta("Você é do sexo masculino ou feminino?",
    ["Masculino", "Feminino"],
    "../assets/images/question1.webp");

let pergunta2 = new Pergunta("Qual é a sua cor favorita",
    ["Vermelho", "Verde", "Laranja", "Amarelo", "Azul", "Rosa", "Violeta", "Azul Claro", "Preto", "Marrom"],
    "../assets/images/question2.webp");

let pergunta3 = new Pergunta("Qual dessas comidas você gosta mais?", ["Carne", "Arroz", "Tangerina", "Peixe", "Massas",
    "Algodão doce", "Sanduiche", "Hamburguer", "Chá", "Sushi e Sashimi"],
    "../assets/images/question3.webp");

let pergunta4 = new Pergunta("Com qual dessas virtudes você mais se identifica?",
    ["Liberdade", "Disciplina", "Prudência", "Bravura", "Devoção", "Inocência", "Paciência", "Autenticidade", "Alegria", "Integridade"],
    "../assets/images/question4.webp");

let pergunta5 = new Pergunta("Com qual dessas profissões você identifica?",
    ["Bombeiro", "Policial", "Babá", "Designer Gráfico", "Cabelereiro", "Professor", "Comissário de bordo", "Piloto de Avião", "Detetive", "Maquinista"],
    "../assets/images/question5.webp");

let pergunta6 = new Pergunta("Qual desses animais você mais gosta?",
    ["Macaco", "Tigre", "Gato", "Camaleão", "Cabra", "Panda Vermelho", "Falcão", "Rinoceronte", "Girafa", "Urso"],
    "../assets/images/question6.webp");

let pergunta7 = new Pergunta("Dentre esses superpoderes, qual você prefere?", ["Esticar-se", "Virar um dragão", "Disparar raios",
    "Ter um bolso infinito", "Intangibilidade", "Tranformar-se em armas", "Ressuscitar", "Poder voar", "Super inteligência", "Crescer membros onde quiser"],
    "../assets/images/question7.webp");

let questionElement = document.querySelector(".question");
let answersContainer = document.querySelector(".answers-container");
let imageElement = document.querySelector(".illustration");
let backButton = document.querySelector("#bck-btn");

backButton.addEventListener("click", (event) => {
    if (page > 1) {
        event.preventDefault();
        let perguntaAtual;
        switch (page) {
            case 1:
                perguntaAtual = pergunta1;
                break;
            case 2:
                perguntaAtual = pergunta2;
                break;
            case 3:
                perguntaAtual = pergunta3;
                break;
            case 4:
                perguntaAtual = pergunta4;
                break;
            case 5:
                perguntaAtual = pergunta5;
                break;
            case 6:
                perguntaAtual = pergunta6;
                break;
            case 7:
                perguntaAtual = pergunta7;
                break;
        }
        if (perguntaAtual) {
            perguntaAtual.resposta = null;
        }
        if (personagens.points > 0) {
            personagens.forEach(personagem => {
                personagem.subPontos();
            })
        }
        page -= 1;
        updateGame();
    }
    return event;
});

backButton.addEventListener("mouseover", () => {
    backButton.style.scale = "1.05";
})
backButton.addEventListener("mouseout", () => {
    backButton.style.scale = "1";
})

function updateGame() {
    switch (page) {
        case 1:
            makePage(pergunta1);
            break;

        case 2:
            makePage(pergunta2);
            break;

        case 3:
            makePage(pergunta3);
            break;

        case 4:
            makePage(pergunta4);
            break;

        case 5:
            makePage(pergunta5);
            break;

        case 6:
            makePage(pergunta6);
            break;

        case 7:
            makePage(pergunta7);
            break;
        default:
            calculateResult();
            window.location.href = "../html/results.html";
            break;
    }
}

function makePage(pergunta) {
        questionElement.textContent = pergunta.name;
        imageElement.src = pergunta.image;

        if (answersContainer) answersContainer.innerHTML = "";

        for (let answer of pergunta.answers) {

            let answerButton = document.createElement("button")
            answerButton.classList.add("answer-button");
            answerButton.textContent = answer;

            answerButton.addEventListener("click", () => {
                pergunta.resposta = answer;
                if (page < 8) page += 1;
                console.log("Página: " + page);
                updateGame();
            });

            answersContainer.appendChild(answerButton);

            answerButton.addEventListener("mouseover", () => {
                answerButton.style.backgroundColor = "#0066ff";
                answerButton.style.scale = "1.05";
            })
            answerButton.addEventListener("mouseout", () => {
                answerButton.style.backgroundColor = "";
                answerButton.style.scale = "1";
            })
        }
}

function calculateResult() {
    let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7];
    let atributos = ["sex", "color", "food", "virtue", "profession", "animal", "superpower"];
    let match = null;

    personagens.forEach(personagem => personagem.points = 0);

    personagens.forEach(personagem => {
        perguntas.forEach((pergunta, index) => {
            let atributoAtual = atributos[index];
            if (pergunta.resposta === personagem[atributoAtual]) {
                personagem.addPontos();
            }

        })

    })

    let maxPoints = Math.max(...personagens.map(p => p.points));
    let empates = personagens.filter(p => p.points === maxPoints);
    let randomIndex = Math.floor(Math.random() * empates.length);
    match = empates[randomIndex];

    localStorage.setItem("vencedor", JSON.stringify(match));
    return match;
}

updateGame();