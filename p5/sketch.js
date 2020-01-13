
function setup() {
  createCanvas(windowWidth,windowHeight)

}

function draw() {
  background("yellow");
  fill('red');
  textSize(80);
  text(frameCount,width/2,height/2);
}


function mouseClicked(){
  window.open("page2.html","_self");

}
