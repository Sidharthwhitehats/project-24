
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var bin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.

	
	
	
	
	


	Engine.run(engine);
	ball1= new Ball(100,540,50);
	bin1= new Bin(509,605,20,100);
	bin2= new Bin(650,605,20,100);
	bin3= new Bin(580,650,160,20);
	ground= new Ground(width/2, height-35, width,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();
ball1.display();
bin1.display();
bin2.display();
bin3.display();


drawSprites();
 
}

function keyPressed(){

	if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}



