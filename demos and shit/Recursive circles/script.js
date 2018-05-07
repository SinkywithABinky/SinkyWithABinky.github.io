function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
}

function draw(){
  background(255);
  drawCircle(width/2,width/2,5);
}



function drawCircle(x, radius, level){
  let fillColour = 125 * level/4;
  fill(fillColour);
  ellipse(x,height/2,radius *2,radius*2);
  if (level > 1){
    level = level-1;
    drawCircle(x - radius, radius,level);
    drawCircle(x+radius, radius,level);
  }
}
