
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,ground,stone,rubber,sand;
var sand2,sand3,sand4,sand5,sand6,sand7,iron

function setup() {

   createCanvas(1000, 1000);
   engine = Engine.create();
   world = engine.world;
   hammer=new HAMMER(500,500)
   ground=new PLANE(500,980,1000,30);
   stone=new STONE(600,200,50,50);
   rubber=new RUBBE(400,700,50);
   sand=new SAN(300,100,10);
   sand2=new SAN(300,110,10);
   sand3=new SAN(300,120,10);
   sand4=new SAN(300,130,10);
   sand5=new SAN(300,140,10);
   sand6=new SAN(300,150,10);
   sand7=new SAN(300,160,10);
   iron=new IRON(700,200,50,20)
  
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron.display();
  //drawSprites();
  
  
}

