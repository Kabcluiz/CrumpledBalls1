
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
function preload()
{
	
}
var cube
var ground
var ball
var cube1
var cube2
var cube3
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,600,800,10)
	//Create the Bodies Here.
	//cube = Bodies.rectangle(100,100,200,200);
	//World.add(world,cube);
	//console.log(cube);
	ball = new Ball(100,580,20,20)
	cube1 = new Basket(500,560,10,70)
	cube2 = new Basket(550,600,90,10)
	cube3 = new Basket(600,560,10,70)



	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  //rect(cube.position.x,cube.position.y);
  drawSprites();
  ground.display()
  ball.display()
  cube1.display()
  cube2.display()
  cube3.display()
}



