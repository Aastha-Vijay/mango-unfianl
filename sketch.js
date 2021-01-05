
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var world,engine,tree,treeImg;
var stone, stoneImg, ground, boy, sling;
var m1, m2, m3, m4, m5, m6, m7;

function preload()
{
	treeImg = loadImage("Tree.png");
}

function setup() {
	createCanvas(1500, 600);
    
	engine = Engine.create();
  world = engine.world;

  m1 = new Mango(320, 1150, 40);
  tree = createSprite(1200, 350);
  tree.addImage(treeImg);
  tree.scale = 0.8
  stone = new Stone(400,300,20);
  ground = new Ground(750,600,1500,10);
 
	//Create the Bodies Here.
  boy = new Boy(80, 270);
  sling = new Sling(stone.body, {x:170, y:270})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  Engine.update(engine);
  drawSprites();
  ground.display();
  boy.display();
  stone.display();
  m1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.setPosition(stone.body, {x:170, y:270});
    sling.attach(stone.body);
  }

}


