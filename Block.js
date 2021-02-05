class Block {
    constructor(x,y,width,height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20
    }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     world.add(world, this,body);
    }
    display(){
    var  pos = this.body.position;
    var angle = this.body.angle;
    push()
    Translate(pos.x,pos.y);
    Rotate(angle);
    rectMode(CENTER);
    strokeweight(4);
    stroke("Black");
    fill("red");
    rect(0,0,this.width, this.height);
    pop()
}
}