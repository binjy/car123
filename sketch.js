var bullet,wall
var thickness,speed,weight











function setup() {
  createCanvas(1600,600);

wall = createSprite(600,24,10,30)

  bullet = createSprite(25,19,9,9)
  
   
  
  speed = random(55,90)
  weight = random(400,1500)
  bullet.velocityX = speed
   
   bullet.weight = weight
}

function draw() {
  background("white");  



  if (wall.x-bullet.x <(bullet.width+wall.width)/2) {
    bullet.velocityX = 0
    var deformation = 0.5 * weight * speed* speed/22509
  }
    
    if(deformation>180){
      bullet.shapeColor = color(255,0,0)
      
    }
    
    if(deformation<160 && deformation>100){
    bullet.shapeColor  = color(230,230,0) 
      
    }

    if (deformation<100) {
      bullet.shapeColor = color(0,255,0)
    }

  drawSprites();
}


