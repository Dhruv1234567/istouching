var fixedRect, movingRect,fixedRect2,fixedRect3,fixedRect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect2 = createSprite(200,150,80,80);
  fixedRect3 = createSprite(100,500,80,30);
  fixedRect4 = createSprite(400,70,40,60);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(istouching(movingRect,fixedRect)){
    movingRect.shapeColor = "mediumspringgreen";
    fixedRect.shapeColor = "mediumspringgreen";
  }else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  if(istouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "mediumspringgreen";
    fixedRect2.shapeColor = "mediumspringgreen";
  }else {
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }
  if(istouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "mediumspringgreen";
    fixedRect3.shapeColor = "mediumspringgreen";
  }else {
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";
  }
  if(istouching(movingRect,fixedRect4)){
    movingRect.shapeColor = "mediumspringgreen";
    fixedRect4.shapeColor = "mediumspringgreen";
  }else {
    movingRect.shapeColor = "red";
    fixedRect4.shapeColor = "red";
  }
  drawSprites();
}
