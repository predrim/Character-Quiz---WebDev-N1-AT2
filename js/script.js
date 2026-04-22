import { Pergunta } from "./Pergunta.js";
import { Personagem } from "./Personagem.js";

let page = 1;

let luffy = new Personagem("Luffy", "Masculino", "Vermelho", "Carne", "Liberdade", "Bombeiro", "Macaco", "Esticar-se")
let zoro = new Personagem("Zoro", "Masculino", "Verde", "Arroz", "Disciplina", "Policial", "Tigre", "Virar um dragão")
let nami = new Personagem("Nami", "Feminino", "Laranja", "Tangerina", "Prudência", "Babá", "Gato", "Disparar raios")
let usopp = new Personagem("Usopp", "Masculino", "Amarelo", "Peixe", "Bravura", "Designer Gráfico", "Camaleão", "Ter um bolso infinito")
let sanji = new Personagem("Sanji", "Masculino", "Azul", "Massas", "Devoção", "Cabelereiro", "Cabra", "Intangibilidade")
let chopper = new Personagem("Chopper", "Masculino", "Rosa", "Algodão doce", "Inocência", "Professor", "Panda Vermelho", "Super inteligência")
let robin = new Personagem("Robin", "Feminino", "Violeta", "Sanduiche", "Paciência", "Comissário de bordo", "Falcão", "Crescer membros onde quiser")
let franky = new Personagem("Franky", "Masculino", "Azul Claro", "Hamburguer", "Autenticidade", "Piloto de Avião", "Rinoceronte", "Transformar-se em armas")
let brook = new Personagem("Brook", "Masculino", "Preto", "Chá", "Alegria", "Detetive", "Girafa", "Ressuscitar")
let jinbe = new Personagem("Jinbe", "Masculino", "Marrom", "Sushi e Sashimi", "Integridade", "Maquinista", "Urso", "Poder voar")

let pergunta1 = new Pergunta("Você é do sexo masculino ou feminino?",
    ["Masculino", "Feminino"],
    "../assets/images/question1.webp")

let pergunta2 = new Pergunta("Qual é a sua cor favorita",
    ["Vermelho", "Verde", "Laranja", "Amarelo", "Azul", "Rosa", "Violeta", "Azul Claro", "Preto", "Marrom"],
    "../assets/images/question1.webp");

let pergunta3 = new Pergunta("Qual dessas comidas você gosta mais?", ["Carne", "Arroz", "Tangerina", "Peixe", "Massas",
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
            calculateResult();
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
    let personagens = [luffy, zoro, nami, usopp, sanji, chopper, robin, franky, brook, jinbe];
    let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7];
    let atributos = ["sex", "color", "food", "virtue", "profession", "animal", "superpower"]
    let match = null;

    personagens.forEach(personagem => {
        perguntas.forEach((pergunta, index) => {
            let atributoAtual = atributos[index];
                if (pergunta.resposta === personagem[atributoAtual]){
                    personagem.addPontos();
                }

        })
        
    })

    personagens.sort((a, b) => b.points - a.points);
    match = personagens[0];
    console.log(match.name, match.points);
}
updateGame();