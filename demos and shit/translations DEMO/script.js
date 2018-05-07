//translationsDEMO march 13

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(255);
  ellipse(windowWidth/2,windowHeight/2,50);
  push();
  translate(windowWidth/2,windowHeight/2);
  for (let i = 0; i < 60; i+5) {
    line(0,50,0,40);
    rotate(1/30*PI);
  }
  pop();
}
