function preload(){

}

function setup() {
  // createCanvas(windowWidth,windowHeight);
  // background('violet');

noCanvas();

  var url_string = window.location.href;
  var myUrl = new URL(url_string);
  var myParam = myUrl.searchParams.get("name2")
  console.log(myParam);
  //按钮跳转页面
  var btn = createButton('tiaozhuan');
  select('button').position(40,40);
  btn.mousePressed(tiaozhuan);

}

function draw() {
// background("violet");
// fill('red');
// textSize(80);
// text(frameCount,width/2,height/2);
//
// //数字到达200 自动跳转页面
// if(frameCount==200){
//   tiaozhuan();
// }
}


function mouseClicked(){
  // window.open("index.html","_self");

}



function tiaozhuan(){
  //跳转index
  window.open("page2.html","_self");
}
