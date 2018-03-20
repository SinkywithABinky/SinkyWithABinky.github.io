
let heights = [];
let numberOfRectangles;
let currentMaxHeight = 0;
let maxHeightXValue = 0;
let flag;

function preload(){
  flag = 0;
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  numberOfRectangles = windowWidth;
  generateInitialTerrain(numberOfRectangles);
}

function draw(){
  background(255);
  displayterrain();
  text("yeet dumb thotticus, the highest point is " + currentMaxHeight,mouseX,mouseY);
  fill(255,0,0);
  ellipse(maxHeightXValue,currentMaxHeight,10);
}

function generateInitialTerrain(numberOfRectangles){
  let time = 0;
  let dt = 0.0125;
  for (let i=0; i<numberOfRectangles; i++){
    let currentHeight = noise(time)*500;
    heights.push(currentHeight);
    time += dt;
  }
}


function displayterrain(){
  rectMode(CORNERS);
  let rectwidth = width/numberOfRectangles;
  fill(0);
  for (let i = 0; i<numberOfRectangles;i++) {
    rect(i*rectwidth, height, (i+1)*rectwidth, height - heights[i]);
    if (height - heights[i] > currentMaxHeight){
      currentMaxHeight = height - heights[i];
      maxHeightXValue = i * rectwidth;
    }


  }
}
