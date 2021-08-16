
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var my_ball;
var ground;
var rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var my_ball_options ={
    restitution: 0.99,
    frictionAir:0.01
  }

  my_ball = Bodies.circle(30,20,20,my_ball_options);
  World.add(world,my_ball);

  var rock_options ={
    isStatic: true
  }

  rock = Bodies.rectangle(50,200,60,20,rock_options);
  World.add(world,rock)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("red")
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(my_ball.position.x,my_ball.position.y,20);
  rect(rock.position.x,rock.position.y,60,20)
 
}

