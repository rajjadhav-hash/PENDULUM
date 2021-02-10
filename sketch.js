
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(280,500,100);
	bob2=new Bob(340,500,100);
	bob3=new Bob(400,500,100);
	bob4=new Bob(460,500,100);
	bob5=new Bob(520,500,100);
	roof=new Roof(400,200,310,20);
	rope1=new Rope(roof.body,bob1.body,40*3,0);
	rope2=new Rope(roof.body,bob2.body,60*2,0);
	rope3=new Rope(roof.body,bob3.body,-30*2,0);
	rope4=new Rope(roof.body,bob4.body,-100*2,0);
	rope5=new Rope(roof.body,bob5.body,10*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}


