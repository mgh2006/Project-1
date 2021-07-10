
function setup() {
  createCanvas(400,400);
   ball = createSprite (200,200,30,30)
}

function draw() 
{
if(keyDown('right')) {
  ball.x = ball.x+10
  ball.shapeColor = "blue"
}
if(keyDown('left')) {
  ball.x = ball.x-10
  ball.shapeColor = "pink"
}
if(keyDown('up')) {
  ball.y= ball.y-10
  ball.shapeColor = "yellow"
}if(keyDown('down')) {
  ball.y= ball.y+10
  ball.shapeColor = "orange"
}
  background("green");
drawSprites()
}




