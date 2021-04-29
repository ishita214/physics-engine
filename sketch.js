const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world,ball,ground;



function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    restitution:1
  }
  ball=Bodies.circle(200,200,20,options);
  World.add(world,ball);

  var options1={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,options1);
  World.add(world,ground);

}

function draw() {
  background(0); 
  Engine.update(engine);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
 drawSprites();
}