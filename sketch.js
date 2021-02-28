
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

stand =new Stand(370,100,700,30);
stand2 =new Stand(400,650,700,120);
bob1 = new bob(230,470,30,30);
bob2 = new bob(630,470,40,40);
bob3 = new bob(530,470,40,40);
bob4 = new bob(430,470,40,40);
bob5 = new bob(330,470,40,40);
bob6 = new bob(130,470,40,40);


rope1 = new rope(bob1.body,{x:230,y:115});
rope2 = new rope(bob2.body,{x:630,y:115});
rope3 = new rope(bob3.body,{x:530,y:115});
rope4 = new rope(bob4.body,{x:430,y:115});
rope5 = new rope(bob5.body,{x:330,y:115});
rope6 = new rope(bob6.body,{x:130,y:115});


	Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)
 
  
stand.display();
 stand2.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 rope6.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 bob6.display();

}

function mouseDragged(){


    Matter.Body.setPosition(bob2.body, {x: mouseX , y: mouseY});

}



