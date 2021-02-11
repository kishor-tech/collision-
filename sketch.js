var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30)
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);
  movingRect.y = World.mouseY;
movingRect.x = World.mouseX;
if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
} 



  drawSprites();
}