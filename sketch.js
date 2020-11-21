
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ball1,ball2,ball3,ball4,ball5;
var point1,point2,point3,point4,point5;
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,300,500,30)
	ball3 = new Ball(500,800)
	ball2 = new Ball2(435,800)
	ball1 = new Ball3(370,800)
	ball4 = new Ball4(565,800)
	ball5 = new Ball5(630,800)
	rope1 = new Rope(ball1.body,ground.body,-65*2,0)
	rope2 = new Rope(ball2.body,ground.body,-65*1,0)
	rope3 = new Rope(ball3.body,ground.body,0,0)
	rope4 = new Rope(ball4.body,ground.body,65*1,0)
	rope5 = new Rope(ball5.body,ground.body,65*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('gray');

  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 24){
		Matter.Body.applyForce(ball1.body,{x:-50,y:50})
	}
}

