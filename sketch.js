const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var superhero,block
var ground;
var fly;

function preload (){
    this.image = loadImage(GamingBackground.png);


}



function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    superhero = new superhero(200,200,80,80);
    fly = new fly(hero.body,{x:500,y:50});
    block= new block(900,100,70,70);
     
    block1 = new Box(900,100,70,70);
    block2 = new Box(900,100,70,70);
    block3 = new Box(900,100,70,70);
    block4 = new Box(900,100,70,70);
    block5 = new Box(900,100,70,70);
    block6 = new Box(900,100,70,70);
    block7 = new Box(800,100,70,70);
    block8 = new Box(800,100,70,70);
    block9 = new Box(800,100,70,70);
    block10 = new Box(800,100,70,70);
    block11 = new Box(800,100,70,70);
    block12 = new Box(800,100,70,70);
    block13 = new Box(700,100,70,70);
    block14 = new Box(700,100,70,70);
    block15 = new Box(700,100,70,70);
    block16 = new Box(700,100,70,70);
    block17 = new Box(700,100,70,70);
    block18 = new Box(700,100,70,70);
    block19 = new Box(700,100,70,70);
    block20 = new Box(700,100,70,70);
     
     

}

function draw(){
    
       background(190);

    
    Engine.update(engine);
    superhero.display();
    fly.display();
    block.display();
    ground.display();
    
}
function mouseDragged() {
     Matter.Body.setPosition(superhero.body, { 
         x: mouseX, y: mouseY });
         }