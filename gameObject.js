class GameObject {
    constructor(x,y,type){
        this.x = x;
        this.y = y;
        this.type = y;
    }
}

class Movable extends GameObject{
    constructor (x,y, type) {super(x,y,type)}

    moveTo(x,y){
        this.x = x;
        this.y = y;
    }
}

class Hero extends Movable{
    constructor(x,y){
        super(x,y,'Hero')
    }
}

class Tree extends GameObject{
    constructor(x,y){
        super(x,y,'Tree');
    }
}

const hero = new Hero();
hero.moveTo(5,5);

const tree = new Tree();