let y = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  makeBackground();

}

function draw() {
  rect(mouseX, mouseY, y, y);
}

function changeSize() {

}

function makeBackground(){
  let circleWidth = 1;

  while( circleWidth <windowWidth){
    ellipse(circleWidth,circleWidth,circleWidth,circleWidth);
    ellipse(windowWidth/circleWidth,windowWidth/circleWidth,circleWidth,circleWidth);
    circleWidth += 1;

  }




}
