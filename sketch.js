var car,wall;
var speed,weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor=("white");
  wall=createSprite(1200, 200, 30, height/2);
  wall.shapeColor=("gray");

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0,0,0); 
  if(wall.x-car.x< (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500;
   
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
      textSize(20);
      stroke("Red")
      fill("Red");
      text("This car is not certified for manufacture",300,600);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
      textSize(20);
      stroke("Yellow")
      fill("Yellow");
      text("This car is not recommended",300,600);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
      textSize(20);
      stroke("Green")
      fill("Green");
      text("Good car",300,600);
    }
  }
  drawSprites();
}
