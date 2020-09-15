
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
var stone;
var boy;
var mango1, mango2, mango3, mango4, mango5;
var elastic, launcherObj;

function preload()
{
  boy=loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1700, 600);
  

	engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,670,800,20);
  tree = new Tree(350,90,450,600);
  stone =new Stone(200,200,40);
  mango1 = new Mango(580,300,40);
  mango2 = new Mango(500,200,40);
  mango3 = new Mango(650,180,40);
  mango4 = new Mango(400,300,40);
  mango5 = new Mango(700,280,40);
  launcherObject = new Launcher(stone.body,{x:235,y:420});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  
  image(boy ,200,340,200,300);

  ground.display();
  boy.display();
  stone.display();
  tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 elastic.display();
 launcherObj.display();
}

function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    elastic.fly();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.diameter+lstone.diameter)
{
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:200,y:200});
    launcherObject.attach(stone.body);
    }
}