export class Personagem{
    
    constructor(name, sex, color, food, virtue, profession, animal, superpower){
        this.points = 0
        
        this.name = name
        this.sex = sex
        this.color = color
        this.food = food
        this.virtue = virtue
        this.profession = profession
        this.animal = animal
        this.superpower = superpower
    }

    addPontos(){
        this.points += 1
    }

    subPontos(){
        this.points -= 1
    }
}

