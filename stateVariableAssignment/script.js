let gameState = 1;


function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  checkState();
}

function checkState(){
  if(gameState === 1){
    backGroundOne();
  }
  else if (gameState === 2){
    backGroundTwo();

  }
}

function backGroundOne(){
  background(0,60,30);
  fill(150,150,0);
  rect((windowWidth/2)-100,(windowHeight/2)-50,100,100);
  fill(255);
  textSize(32);
  text("plAy", windowWidth/2 -80, windowHeight/2);
  if(windowWidth/2-50<mouseX<windowWidth/2+50 &&  windowHeight/2-50<mouseY<windowHeight/2+50 && mouseIsPressed){
    gameState = 2;
    background(0);
  }
}

function backGroundTwo(){
  background(0,0,255);
  makeEarthMap();
}



function makeEarthMap(){
}
