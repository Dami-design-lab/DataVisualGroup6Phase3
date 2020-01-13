function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('violet');

  var url_string = window.location.href;
  var myUrl = new URL(url_string);
  var myParam = myUrl.searchParams.get("name2")
  console.log(myParam);
}

function draw() {
background("violet");
fill('red');
textSize(80);
text(frameCount,width/2,height/2);
}


function mouseClicked(){
  window.open("index.html","_self");

}
