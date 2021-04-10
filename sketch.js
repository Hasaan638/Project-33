
var backgroundimg

function preload(){


  backgroundimg= loadImage("sprites/snow1.jpg");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  snow1= new Snow(200,200,70,70);
}

function draw() {
  background(backgroundimg);  
  drawSprites();

  snow1.display();
}