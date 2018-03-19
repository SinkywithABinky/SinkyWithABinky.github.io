
let heights = [];
let numberOfRectangles;


function setup(){
  createCanvas(windowWidth,windowHeight);
  numberOfRectangles = windowWidth;
  generateInitialTerrain(10);
}

function draw(){
  background(255);
  displayterrain();
}

function generateInitialTerrain(numberOfRectangles){
  for (let i=0; i<numberOfRectangles; i++){
    heights.push(random(100,500));
  }
}


function displayterrain(){

}
