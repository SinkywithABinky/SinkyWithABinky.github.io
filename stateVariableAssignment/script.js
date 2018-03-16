//setting variables
let gameState = 1;
let playerturn = 1;
let countryInfoClicked = 0;
let blockWidth;
let blockHeight;

//creating variables for objects
let alaska;









//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  //Creating a grid
  blockWidth = windowWidth / 54;
  blockHeight = windowHeight / 41;

  //setting objects
  alaska = {
    Name: "Alaska",     //the name
    xStart: blockWidth * 0,   //first x coOrd
    xFin: blockWidth * 2,//last x coOrd
    yStart: blockHeight * 0,//first y coOrd
    yFin: blockHeight * 2,//last y coOrd
    ownedBy: "noOne",     // who it is owned by
    gold: 2,      //a game mechanic
    resources: 3,//a game mechanic
    isClicked: 0, //is this country being clicked right now?
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
  else if (gameState === 3) {
    backGroundThree();
  }
}






//makes the home screen
function backGroundOne() {
  //the aesthetics of the screen
  background(0, 150, 130);
  fill(0);
  rect((windowWidth / 2) - 100, (windowHeight / 2) - 50, 100, 100);
  fill(255);
  textSize(30);
  text("Play", windowWidth / 2 - 80, windowHeight / 2);

  //sends to the game
  if (windowWidth / 2 - 100 < mouseX && mouseX < windowWidth / 2  && windowHeight / 2 - 50 < mouseY&& mouseY < windowHeight / 2 + 50 && mouseIsPressed) {
    gameState = 2;
    background(0);
  }
  //the aesthetics of the screen

  fill(0);
  rect((windowWidth / 2) - 100, (windowHeight / 2) + 200, 100, 100);
  fill(255);
  text("Rules", windowWidth / 2 - 100, windowHeight / 2 + 250);


  //sends to the tutorial
  if (windowWidth / 2 - 100 < mouseX && mouseX < windowWidth / 2 + 100 && windowHeight / 2 + 200 < mouseY && mouseY < windowHeight / 2 + 300 && mouseIsPressed) {
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
function backGroundThree() {
  background(0, 0, 0);
  fill(255,0,0);
  rect(windowWidth-50,0,50,50);
  fill(255);
  textSize(30);
  text("these are the rules", 10, 50);

  //the exit button
  if (windowWidth>mouseX && windowWidth-50<mouseX && 50>mouseY && 0<mouseY && mouseIsPressed){
    gameState = 1;
  }
}









//makes every land mass
function makeEarthMap() {
  makeAlaska();
}









//alaska
function makeAlaska() {


//determines the colour based on who owns it
  if (countryMousedOver(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin) === true) {
    fill(70, 70, 70);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if (alaska.ownedBy === "noOne") {
    fill(50, 50, 50);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if (alaska.ownedBy === "portugal") {
    fill(0, 255, 0);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if (alaska.ownedBy === "france") {
    fill(0, 0, 255);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if (alaska.ownedBy === "spain") {
    fill(255, 204, 0);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }
  else if (alaska.ownedBy === "england") {
    fill(255, 0, 0);
    rect(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin);
  }

  //if this is true, a pop up of the countries info appears
  if (clickOnCountry(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin) === true) {
    alaska.isClicked = 1;
  }

  //this turns off the popup
  isClicked(alaska.xStart, alaska.yStart, alaska.xFin, alaska.yFin, alaska.Name, alaska.gold, alaska.resources, alaska.isClicked, alaska.ownedBy);
  if (mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100, mouseY > windowHeight / 2 - 100 && mouseY < windowHeight / 2 + 100 && mouseIsPressed) {
    alaska.isClicked = 0;
  }
}







//countries call on this to see if they are being clicked
function isClicked(x1, y1, x2, y2, countryName, gold, resources, isClicked, ownedBy) {
  if (isClicked === 1) {
    fill(255);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 100, 200, 200);
    fill(0);
    textSize(13);
    text("This is " + countryName, windowWidth / 2 - 90, windowHeight / 2 - 80);
    text("It is owned by: " + ownedBy, windowWidth / 2 - 90, windowHeight / 2 - 40);
    text("It has this many resources: " + resources, windowWidth / 2 - 90, windowHeight / 2 );
    text("It has this much gold: " + gold, windowWidth / 2 - 90, windowHeight / 2 + 40);
    text("Click again to remove this page!", windowWidth / 2 - 90, windowHeight / 2 + 80);
  }
}

//input coordinates and it tells you if the mouse is clicking inside of them
function clickOnCountry(x1, y1, x2, y2) {
  return(x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2 && mouseIsPressed);

}




//just checks if you moused over a thing
function countryMousedOver(x1, y1, x2, y2) {
  if (x1 < mouseX && mouseX < x2 && y1 < mouseY && mouseY < y2) {
    return true;
  }
}
