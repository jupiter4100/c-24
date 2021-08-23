const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var pedra
var engine, world;
var hammer;
var borr
var ferr

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
borr=new Rubber(600,300,120)
pedra=new Rocha(800,300,100,100)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ferr=new ferro(400,300,300,100)



}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    pedra.display()
    borr.display()
    plane.display();
    hammer.display();
ferr.display()
    
 
}