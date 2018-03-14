

//setting variables
let gameState = 1;
let playerturn = 1;
let countryInfoClicked = 0;
let blockWidth;
let blockHeight;
let alaska;










//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  blockWidth = windowWidth/54;
  blockHeight = windowHeight/41;

  //setting objects
  alaska = {
    Name: "Alaska",
    xStart: blockWidth*0,
    xFin: blockWidth*2,
    yStart:  blockHeight*0,
    yFin: blockHeight*2,
    ownedBy: "noOne",
    gold: 2,
    resources: 3,
  };

}



















//just calls other functions
function draw() {
  checkState();
}


//determines which screen the game needs to show
function checkState() {
  if (gameState === 1) {
    backGroundOne();
  }
  else if (gameState === 2) {
    backGroundTwo();

  }
  else if (gameState ===3){
    backGroundThree();
  }
}






//makes the home screen
function backGroundOne() {
  background(0, 150, 130);
  fill(0);
  rect((windowWidth / 2) - 100, (windowHeight / 2) - 50, 100, 100);
  fill(255);
  textSize(30);
  text("Play", windowWidth / 2 - 80, windowHeight / 2);
  if (windowWidth / 2 - 50 < mouseX < windowWidth / 2 + 50 && windowHeight / 2 - 50 < mouseY < windowHeight / 2 + 50 && mouseIsPressed) {
    gameState = 2;
    background(0);
  }
  fill(0);
  rect((windowWidth / 2) - 100, (windowHeight / 2) + 200, 100, 100);
  fill(255);
  text("Tutorial", windowWidth / 2 -100, windowHeight / 2 + 250);
  if (windowWidth / 2 - 100 < mouseX && mouseX< windowWidth / 2 + 100 && windowHeight / 2 + 200< mouseY&& mouseY < windowHeight / 2 + 300 && mouseIsPressed) {
    gameState = 3;
    background(0);
  }
}








//starts the function chain that makes the world
function backGroundTwo() {
  background(0, 0, 255);
  makeEarthMap();
}






//makes the tutorial screen
function backGroundThree(){
  background(0, 0, 0);
  fill(255);
  textSize(30);
  text("this is a tutorial",10,50);
}










//makes every land mass
function makeEarthMap() {
  makeAlaska();
}
















//alaska
function makeAlaska() {

  if (countryMousedOver(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin) === true) {
    fill(70, 70, 70);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if(alaska.ownedBy === "noOne"){
    fill(50, 50, 50);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if(alaska.ownedBy === "portugal"){
    fill(0, 255, 0);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if(alaska.ownedBy === "france"){
    fill(0, 0, 255);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if(alaska.ownedBy === "spain"){
    fill(255, 204, 0);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if(alaska.ownedBy === "england"){
    fill(255, 0, 0);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  isClicked(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin,alaska.Name, alaska.gold,alaska.resources);

}







//countries call on this to see if they are being clicked
function isClicked(x1, y1, x2, y2, countryName, gold, resources){
  if (x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2 && mouseIsPressed) {
    countryInfoClicked = 1;
    while (countryInfoClicked === 1 ){
      fill(0);
      rect(windowWidth/2 - 50,windowHeight/2 -50,100,100);
      fill(0);
      textSize(14);
      text("This is " + countryName ,windowWidth/2 - 50,windowHeight/2 -50 );
      text("It has this many resources:" + resources ,windowWidth/2 - 50,windowHeight/2  );
      text("It has this much gold:" + gold ,windowWidth/2 - 50,windowHeight/2 + 50 );
      text("click again to remove this page", windowWidth/2 - 60,windowHeight/2 + 60 );
      if (x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2 && mouseIsPressed) {
        countryInfoClicked = 0;
      }
    }
  }
}





//just checks if you moused over a thing
function countryMousedOver(x1, y1, x2, y2) {
  if (x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2) {
    return true;
  }
}
