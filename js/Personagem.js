export class Personagem{
    
    constructor(name, sex, color, food, virtue, profession, animal, superpower, treasure, oceanFear, dayTime, image, info, points){
        this.name = name;
        this.sex = sex;
        this.color = color;
        this.food = food;
        this.virtue = virtue;
        this.profession = profession;
        this.animal = animal;
        this.superpower = superpower;
        this.treasure = treasure;
        this.oceanFear = oceanFear;
        this.dayTime = dayTime;
        this.image = image;
        this.info = info;
        this.points = 0;
    }

    addPontos(){
        this.points += 1;
    }

    subPontos(){
        this.points -= 1;
    }
}

