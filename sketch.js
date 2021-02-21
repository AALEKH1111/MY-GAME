function preload(){
  playerimg=loadImage("ally 1.png");
  treasure1img=loadImage("treasure 1.png");
  treasure2img=loadImage("treasure 2.png");
  treasure3img=loadImage("treasure 3.png");
  treasure4img=loadImage("treasure 4.png");
  treasure5img=loadImage("treasure 5.png");
  enemy1img=loadImage("enemy 1.png");
}















function setup() {
  createCanvas(1600,757);

  //player sprite
  player=createSprite(50,50,30,30);
  player.scale=0.06;
  player.addImage(playerimg);
  
  //treasures
  treasure1=createSprite(350,450,10,10);
  treasure1.scale=0.09;
  treasure1.addImage(treasure1img);
  treasure2=createSprite(1140,590,10,10);
  treasure2.scale=0.09;
  treasure2.addImage(treasure2img);
  treasure3=createSprite(630,630,10,10);
  treasure3.scale=0.09;
  treasure3.addImage(treasure3img);
  treasure4=createSprite(800,100,10,10);
  treasure4.scale=0.09;
  treasure4.addImage(treasure4img);
  treasure5=createSprite(1265,90,10,10);
  treasure5.scale=0.09;
  treasure5.addImage(treasure5img);

  //maze blocks
  block1=createSprite(250,150,10,150);
  block2=createSprite(75,240,150,11);
  block3=createSprite(420,150,150,11);
  block4=createSprite(160,400,170,11);
  block5=createSprite(321,312,150,11);
  block6=createSprite(391,395,10,175);
  block7=createSprite(321,482,150,11);
  block8=createSprite(90,570,10,175);
  block9=createSprite(170,652,150,11);
  block10=createSprite(600,150,10,170);
  block11=createSprite(760,70,150,11);
  block12=createSprite(830,240,10,175);
  block13=createSprite(830,617,10,280);
  block14=createSprite(600,395,200,11);
  block15=createSprite(600,570,10,175);
  block16=createSprite(390,664,10,179);
  block17=createSprite(599,660,230,11);
  block18=createSprite(600,315,40,40);
  block19=createSprite(951,610,11,175);
  block20=createSprite(1021,700,151,11);
  block21=createSprite(1180,700,10,175);
  block22=createSprite(1043,540,10,150);
  block23=createSprite(1107,618,137,11);
  block24=createSprite(1111,395,151,11);
  block25=createSprite(1113,480,10,160);
  block26=createSprite(1180,533,10,160);

  //enemy sprite
  enemy1=createSprite(280,350,10,10);
  enemy1.scale=0.07;
  enemy1.addImage(enemy1img);
  enemy1.velocityY=4;
  enemy1.bounceOff(block5);
  enemy1.bounceOff(block7);
}

function draw() {
  background("black");
  rectMode(CENTER);
  fill("black");
  stroke("red");
  strokeWeight(10);
  rect(800,378,1600,757); 
  fill("white");
  text(mouseX + "," + mouseY,mouseX,mouseY);  

  //giving movement for player with arrow keys
  if(keyDown("UP_ARROW"))
  {
    player.y=player.y-5;
  }
  if(keyDown("DOWN_ARROW"))
  {
    player.y=player.y+5;
  }
  if(keyDown("LEFT_ARROW"))
  {
    player.x=player.x-5;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    player.x=player.x+5;
  }
  drawSprites();
}