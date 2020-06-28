const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var asteroid/*,projectiles,spaceshuttle*/;

function setup(){
    var canvas = createCanvas(1365,652);
    background("black");
    engine = Engine.create();
    world = engine.world;
 
    spaceshuttle = new Spaceshuttle(650,300,20,20);
}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
   
    spaceshuttle.display();
}
