
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball;
var ground;
var d1;
var d2;
var d3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

d1 = createSprite(600,625,150,20);
d1.shapeColor = "white";
d2 = createSprite(520,575,20,100);
d2.shapeColor = "white";
d3 = createSprite(680,575,20,100);
d3.shapeColor = "white";

ground1 = createSprite(100,height-55,3000,10);
ground1.shapeColor = "yellow";

ground = Bodies.rectangle(width/2, 610, 3000, 10 , {isStatic:true} );
World.add(world, ground);

ball = Bodies.circle(100, 200 , 5,options);
World.add(world, ball);

console.log(ground);

var options={
 isStatic:true,
 restitution:0.3,
 friction:0.5,
 density:1.2
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,25,25)



drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}

