let back,star,starI,fairy,fairyI;

function preload(){
  back= loadImage("starnight.png")
  starI= loadImage("star.png")
  fairyI=loadAnimation("fairy1.png","fairy2.png")
  
}


function setup(){
  createCanvas(700,700)
  star= createSprite(650,100,20,02)
  star.addImage(starI)
  star.scale=0.2;
  fairy= createSprite(150,570,20,02)
  fairy.addAnimation("d",fairyI)
  fairy.scale=0.2;
  //fairy.debug=true;
  fairy.setCollider("circle",200,350,500)
  
}
function draw(){
background(back);
  if(keyDown("right")){
    fairy.x+=10
  }
  if(keyDown("down")){
    star.velocityY+=0.8;
  }
  if(star.isTouching(fairy)){
    star.velocityY=0;
    
  }
  
  drawSprites()
}


