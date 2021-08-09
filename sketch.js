const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var engine;

var blower,blowerMouth,ball;
var button;
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  blower = new Blower(350,200,100,100);
  blowerMouth = new  BlowerMouth(250,240,100,20)
  ball = new Ball(330,100,50,50)
  button = createButton("click to blow")
  button.mousePressed(blow)
  button.class("blowButton")
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  blower.display()
  blowerMouth.display()
  ball.display()

  
}
function blow(){
Matter.Body.applyForce(ball.body, {x:0,y:0},{x:0,y:0.05});

}
