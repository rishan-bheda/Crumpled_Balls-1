
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1 = new Paper(150,350,20);
	ground = new Ground(400,675,800,20);
	dustbin1 = new Dustbin(610,660,100,10);
	dustbin2 = new Dustbin(560,635,10,50);
	dustbin3 = new Dustbin(660,635,10,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:52, y:-52})

	}

}



