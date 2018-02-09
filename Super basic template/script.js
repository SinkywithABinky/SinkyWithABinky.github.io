//global variables
let x,y;

let isMovingUp, isMovingDown, isMovingLeft,isMovingRight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //init values of x and y
  x = width/2;
  y = height/2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
}

function draw() {
  background(255);


  if (keyIsPressed){
    moveStickman();

  }

  drawStickman(mouseX,mouseY);
  drawStickman(sqrt(mouseX)*20,sqrt(mouseY)*20);
  drawStickman(sqrt(mouseY)*20,sqrt(mouseX)*20);
  drawStickman(mouseY,mouseX);
  drawStickman(x,y);

}

function keyPressed(){
  if (key ==='w'|| key === 'W'){
    //y = y -10;
    isMovingUp = true;
  }
  if (key ==='s'|| key === 'S'){
    //y = y + 10;
    isMovingDown = true;
  }
  if (key === 'a'|| key === 'A'){
    //x = x -10;
    isMovingLeft = true;
  }
  if (key === 'd'|| key === 'D' ){
    //x = x +10;
    isMovingRight = true;
  }
}

function keyReleased(){




}


function moveStickman(){
    if (isMovingUp){
      isMovingUp = true;
    }
    if (isMovingDown){
      isMovingDown = true;
    }
    if isMovingLeft){
      isMovingLeft = true;
    }
    if (isMovingRight){
      isMovingRight =true;
    }
}



function drawStickman(x,y) {
  //head of the stickman
  fill(150,30,50);
  ellipse(x, y, 100, 100);

  //hat of stickman
  fill(255,0 ,0);
  rect(x-50,y-80,100,30);
  rect(x-25, y -130 ,50,50);

  //body of stickman
  line(x,y+50,x,y+200);

  //limbs of stickman
  line(x-50,y+100,x+50,y+100);
  line(x,y+200,x+50,y+250);
  line(x,y+200,x-50,y+250);



}
