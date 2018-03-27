let grid = [[0,1,0],[1,1,0],[1,0,1]];
let blockWidth;

function setup(){
  createCanvas(600,600);
  blockWidth = width/3;
}


function draw(){
  background(255);
  displayGrid();
}




function displayGrid(){
  for(let x =0; x<grid.length; x++){
    for(let y=0; y<grid[x].length; y++){
      if (grid [x] [y] ===0){
        fill(255);
      }
      else{
        fill(0);
      }
      rect(blockWidth *x,blockWidth *y,blockWidth,blockWidth);
    }
  }
}
