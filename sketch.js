const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperSprite, groundSprite;
var box1Sprite, box2Sprite, box3Sprite;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paperSprite = createSprite(30,700,20,20);
	paperSprite.shapeColor = color(0,255,0);

	box1Sprite=createSprite(300,500,200,20);
	box1Sprite.shapeColor=color(255,0,0);

	box2Sprite=createSprite(500,610,20,100);
	box2Sprite.shapeColor=color(255,0,0);

	box3Sprite=createSprite(700,610,20,100);
	box3Sprite.shapeColor=color(255,0,0);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}


	paper = Matter.Bodies.circle(30,300,20, options);
	World.add(world,paper);

	box1 = Bodies.rectangle(600,650,200,20, {isStatic : true});
	World.add(world, box1);

	box2 = Bodies.rectangle(500,610,200,20, {isStatic : true});
	World.add(world, box1);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  	paperSprite.x= paper.position.x
  	paperSprite.y= paper.position.y

  	box1Sprite.x= box1.position.x
  	box1Sprite.y= box1.position.y

  	box2Sprite.x= box2.position.x
 	box2Sprite.y= box2.position.y

  keyPressed();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position.x,85,y,-85);

	}
}

