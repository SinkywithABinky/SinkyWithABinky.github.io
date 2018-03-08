let gameState = 1;

let alaska = {
  Name: "Alaska",
  xStart: 0,
  xFin: 50,
  yStart: 0,
  yFin: 50,
}







function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  checkState();
}

function checkState() {
  if (gameState === 1) {
    backGroundOne();
  } else if (gameState === 2) {
    backGroundTwo();

  }
}

function backGroundOne() {
  background(0, 60, 30);
  fill(150, 150, 0);
  rect((windowWidth / 2) - 100, (windowHeight / 2) - 50, 100, 100);
  fill(255);
  textSize(32);
  text("plAy", windowWidth / 2 - 80, windowHeight / 2);
  if (windowWidth / 2 - 50 < mouseX < windowWidth / 2 + 50 && windowHeight / 2 - 50 < mouseY < windowHeight / 2 + 50 && mouseIsPressed) {
    gameState = 2;
    background(0);
  }
}

function backGroundTwo() {
  background(0, 0, 255);
  makeEarthMap();
}



function makeEarthMap() {
  makeAlaska();
}


function makeAlaska() {

  if (countryMousedOver(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin) === true) {
    fill(40, 255, 40);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  } else {
    fill(70, 70, 70);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
}

function countryMousedOver(x1, y1, x2, y2) {
  if (x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2) {
    return true;
  }
}
