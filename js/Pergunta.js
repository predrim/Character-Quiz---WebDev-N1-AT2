export class Pergunta {
    constructor(name, answers = [], image) {
        this.name = name; 
        this.answers = answers; 
        this.image = image; 
        this.resposta = "";
    }
}