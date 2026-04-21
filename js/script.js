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
let pergunta3 = new Pergunta()

let questionElement = document.querySelector(".question");
let answersContainer = document.querySelector(".answers-container");
let imageElement = document.querySelector(".illustration");

function updateGame() {
    switch (page) {
        case 1:
            makePage(pergunta1)
            break;

        case 2:
            makePage(pergunta2)
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