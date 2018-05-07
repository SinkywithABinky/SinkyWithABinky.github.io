let state = 1;
let y = 20;
let shapeKind = 1;
let changedbackground = 1;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  stroke(0);
}
function draw(){
  checkState();
}

function checkState(){
  if(state === 1){
    backgroundOne();
  }
  else if (state === 2){
    backgroundTwo();

  }
}

function backgroundOne(){
  background(0);
  fill(50,90,60);
  rect((windowWidth/2) - 50,(windowHeight/2) - 50,100,100);
  fill(255);
  textSize(32);
  text("plAy", windowWidth/2, windowHeight/2);
  if(windowWidth/2-50<mouseX<windowWidth/2+50 &&  windowHeight/2-50<mouseY<windowHeight/2+50 && mouseIsPressed){
    state = 2;
  }

}
function backgroundTwo(){
  if (changedbackground = 1){
    makeBackground();
  }
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
  if (state === 2){
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

}


function changeSize() {
  if(state === 2){
    if (key === 'a' || key === 'A') {
      y = y+1;
    }
    else if (key === 'd' || key === 'D') {
      y = y-1;
    }

  }
}

function keyPressed(){
  if (state === 2){
    if (key === 'w' || key === 'W') {
      shapeKind = shapeKind+1;
    }
    else if (key === 's' || key === 'S') {
      shapeKind = shapeKind-1;
    }
  }
  function makeBackground(){
    background(255);
    let circleWidth = windowWidth*2;

    while( circleWidth >0){
      ellipse(windowWidth/2,windowHeight/2,circleWidth,circleWidth);
      circleWidth -= 1;
    changedbackground = 5;
  }
}

}
