import { Pergunta } from "./Pergunta.js";
import { Personagem } from "./Personagem.js";

let page = 1;

let luffy = new Personagem("masculino")
let zoro = new Personagem("masculino")
let nami = new Personagem("feminino")
let usopp = new Personagem("masculino")
let sanji = new Personagem("masculino")
let chopper = new Personagem("masculino")
let robin = new Personagem("feminino")
let franky = new Personagem("masculino")
let brook = new Personagem("masculino")
let jinbe = new Personagem("masculino")

let pergunta1 = new Pergunta("Você é do sexo masculino ou feminino?",
    ["Masculino", "Feminino"],
    "../assets/images/question1.webp")

let pergunta2 = new Pergunta("Qual é a sua cor favorita",
    ["Vermelho", "Verde", "Laranja", "Amarelo", "Azul", "Rosa", "Violeta", "Azul Claro", "Preto", "Marrom"],
    "../assets/images/question1.webp");

let pergunta3 = new Pergunta("Qual sua comida favorita?", ["Carne", "Arroz", "Tangerina", "Peixe", "Massas",
     "Algodão doce", "Sanduiche", "Hamburguer", "Chá", "Sushi e Sashimi"]);

let pergunta4 = new Pergunta("Dentre essas virtudes, com qual você mais se identifica", 
    ["Liberdade", "Disciplina", "Prudência","Bravura", "Devoção", "Inocência", "Paciência", "Autenticidade", "Alegria", "Integridade"]);

let pergunta5 = new Pergunta("Com qual dessas profissões você identifica?", 
    ["Bombeiro", "Policial", "Babá", "Designer Gráfico", "Cabelereiro", "Professor", "Comissário de bordo","Piloto de Avião", "Detetive", "Maquinista"],)

let pergunta6 = new Pergunta("Qual desses animais você mais gosta?", 
    ["Macaco", "Tigre", "Gato", "Camaleão", "Cabra", "Panda Vermelho", "Falcão", "Rinoceronte", "Girafa", "Urso"],);

let pergunta7 = new Pergunta("Dentre esses superpoderes, qual você prefere?", ["Esticar-se", "Virar um dragão", "Disparar raios",
    "Ter um bolso infinito", "Intangibilidade", "Tranformar-se em armas", "Ressuscitar", "Poder voar", "Super inteligência", "Crescer membros onde quiser"])

let questionElement = document.querySelector(".question");
let answersContainer = document.querySelector(".answers-container");
let imageElement = document.querySelector(".illustration");
let backButton = document.querySelector("#bck-btn");

backButton.addEventListener("click", (event) =>{
    if (page > 1){
        event.preventDefault();
        let perguntaAtual;
        switch(page){
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
        if (perguntaAtual){
            perguntaAtual.resposta = null;
        }
        page -= 1;
        updateGame()
    }
    return event
})

function updateGame() {
    switch (page) {
        case 1:
            makePage(pergunta1)
            break;

        case 2:
            makePage(pergunta2)
            break;

        case 3:
            makePage(pergunta3)
            break;
            
        case 4:
            makePage(pergunta4)
            break;

        case 5:
            makePage(pergunta5)        
            break;

        case 6:
            makePage(pergunta6)        
            break;

        case 7:
            makePage(pergunta7)        
            break;
        
        default:

            break;            
    }
}

function makePage(pergunta) {
    questionElement.textContent = pergunta.name;
    imageElement.src = pergunta.image

    if (answersContainer) answersContainer.innerHTML = "";

    for (let answer of pergunta.answers) {

        let answerButton = document.createElement("button")
        answerButton.classList.add("answer-button");
        answerButton.textContent = answer;

        answerButton.addEventListener("click", () => {
            pergunta.resposta = answer;
            page += 1;

            updateGame();
        });

        answersContainer.appendChild(answerButton);
    }
}

updateGame();