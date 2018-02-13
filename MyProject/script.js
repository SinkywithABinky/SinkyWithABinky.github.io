let y = 20;
let x = 20;


function setup() {
  createCanvas(500, 700);
  background(0);
  stroke(255);
  while(x < windowHeight){ //AND x < windowHeight){
    ellipse(windowWidth/2 ,windowHeight/2,x);
    x += 5;
  }
}

function draw() {
    rect(mouseX,mouseY, y,y);
}
