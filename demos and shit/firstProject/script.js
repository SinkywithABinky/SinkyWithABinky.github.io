let y = 20;
let shapeKind = 1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  makeBackground();

}

function draw() {
  if (keyIsPressed) {
    changeSize();
  }
  if (shapeKind <1){
    shapeKind = 3;

  }
  if (shapeKind >3){
    shapeKind = 1;

  }

}
function mousePressed() {
  if (mouseButton === LEFT) {
    if(shapeKind === 1){
      rect(mouseX-y/2, mouseY-y/2, y, y);
    }
    else if(shapeKind === 2){
      ellipse(mouseX, mouseY, y, y);
    }
    else if(shapeKind === 3){
      triangle(mouseX+y/2,mouseY+y/2,mouseX-y/2,mouseY+y/2,mouseX,mouseY -y/2);
    }

  }
}


function changeSize() {
  if (key === 'a' || key === 'A') {
    y = y+1;
  }
  else if (key === 'd' || key === 'D') {
    y = y-1;
  }
}

function keyPressed(){
  if (key === 'w' || key === 'W') {
    shapeKind = shapeKind+1;
  }
  else if (key === 's' || key === 'S') {
    shapeKind = shapeKind-1;
  }
}



function makeBackground(){
  let circleWidth = windowWidth*2;

  while( circleWidth >0){
    ellipse(windowWidth/2,windowHeight/2,circleWidth,circleWidth);
    circleWidth -= 1;
  }
}
