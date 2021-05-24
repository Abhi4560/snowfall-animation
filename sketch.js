var snowman,snowmanImg,snowFlake;
var ball1;

function preload(){
  snowBg = loadImage("snow3.jpg");
  snowFlake = loadImage("snow4.webp");

}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(snowBg); 

  if(frameCount%100 === 0){
    var snowfall = createSprite(random(30,780),-20,50,50);
    snowfall.velocityY = 3;
    snowfall.addImage("snowFlake",snowFlake);
    snowfall.scale = 0.15;
  }
  drawSprites();
}