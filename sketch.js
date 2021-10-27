const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var boyImg, cartImg;

function  preload(){
  bgImg = loadImage("images/shop-bg.jpg");
  boyImg = loadImage("images/boy.png");
  cartImg = loadImage("images/cart.png");
}
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 580, 1200, 20);
  Matter.Body.setStatic(ground.body,true);
  cart = new Ball(100,100,140);
  boy = new Box(700, 100, 180, 180);
  rope = new Rope(boy.body, cart.body);

}

function draw() {
  background(bgImg);
  Engine.update(engine);
textSize(50)
 // text("AI enabled shopping cart ", 200,100)
  ground.display();
  
  boy.display();
  
  cart.display();

 // rope.display();


}


function keyPressed() {
  if(keyCode == 39)
  Matter.Body.setPosition(boy.body, { x: boy.body.position.x+50, y: boy.body.position.y });

  if(keyCode == 37)
  Matter.Body.setPosition(boy.body, { x: boy.body.position.x-50, y: boy.body.position.y });

}


