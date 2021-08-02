var bg,bgImg;
var tom,tomImg,log,logImg,can,canImg,mushroom,mushroomImg,plant,plantImg,coin,coinImg,obstaclesGroup;
var score = 0;
function preload(){
bgImg = loadImage("sprites/Road.png");
tomImg = loadImage("sprites/tom2.png");
logImg = loadImage("sprites/log3.png");
canImg = loadImage("sprites/can2.png");
mushroomImg = loadImage("sprites/mushroom2.png");
plantImg = loadImage("sprites/plant2.png");
coinImg = loadImage("sprites/coin2.png");
}

function setup() {
  createCanvas(1200,600);

 bg = createSprite(600,400,1400,800);
 bg.addImage(bgImg);

 tom = createSprite(600,450,20,20);
 tom.addImage(tomImg);

obstaclesGroup = createGroup();

}

function draw() {
  background(255,255,255);

  bg.velocityY = 10;

  //console.log(bg.y);

  if(bg.y>600){
    bg.y = height/2

  }

  if(keyDown(LEFT_ARROW)){
    tom.x -= 7;
  
  }

  if(keyDown(RIGHT_ARROW)){
    tom.x += 7;
  
  }

  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(300,0,10,40);
   
   obstacle.velocityY = +(8+ score/100 );
   console.log(obstacle.y);
   obstacle.debug=true;
   obstacle.setCollider("circle",0,0,60)
    //generate random obstacles
    var rand = Math.round(random(1,100));
    switch(rand) {
      case 1: obstacle.addImage(logImg);
              break;
      case 2: obstacle.addImage(canImg);
              break;
      case 3: obstacle.addImage(plantImg);
              break;
      case 4: obstacle.addImage(coinImg);
              break;
      case 5: obstacle.addImage(mushroomImg);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.4;
    obstacle.lifetime = 800;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
   
 }
}