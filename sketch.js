var movingRect,fixedRect;
var bullet1;
var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet1 = createSprite(50,150,50,50);
  bullet1.velocityX=5;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(0,0,0);
  
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet1,wall)){
    bullet1.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
     
   if(damage>10){
      wall.shapeColor=color(255,0,0);

   }

   if(damage<10){
      wall.shapeColor=color(0,255,0);

   }
  }
  drawSprites();
}


function hasCollided(lbullet,lwall){
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
 if (bulletRightEdge>=wallLeftEdge){
     return true
    }
     return false;

  }
