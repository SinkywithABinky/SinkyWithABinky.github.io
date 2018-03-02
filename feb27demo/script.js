let CoOrd = 0;
let CoOrd2 = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  if (mouseIsPressed===true){
    if (keyIsPressed && (key === "t"||key==="T")){
      CoOrd = random(windowWidth)
      CoOrd2 = random(windowHeight)
      triangle(CoOrd,CoOrd2,CoOrd -50,CoOrd2 -50,CoOrd + 50,CoOrd2 -50);
    }
  }
  else if(keyIsPressed && (key === "x"||key === "X"||key === "Z"||key === "z")){
    ellipse(random(windowWidth),random(windowHeight),random(50,150));
  }
}
