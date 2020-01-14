
function setup() {
  // createCanvas(windowWidth,windowHeight);
  noCanvas();
  // select('canvas').position(0,0);
}

function draw() {
  background("yellow");
  fill('red');
  textSize(80);
  text(frameCount,width/2,height/2);

  if(frameCount==130){
    mouseClicked();
  }
}


function mouseClicked(){
  window.open("page2.html","_self");

}
