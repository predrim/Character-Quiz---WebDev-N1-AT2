export class Personagem{
    
    constructor(sex, color, food, virtue){
        this.points = 0
        
        this.sex = sex
        this.color = color
        this.food = food
        this.virtue = virtue
    }

    addPontos(){
        this.points += 1
    }
}

