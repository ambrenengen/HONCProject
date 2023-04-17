let bg;
let y = 0;
let pic;
let cat = [];
let filename;

function preload(){
  p0 = loadImage('assets/0.png');
  p1 = loadImage('assets/1.png');
  p2 = loadImage('assets/2.png');
  p3 = loadImage('assets/3.png');
  p4 = loadImage('assets/4.png');
  p5 = loadImage('assets/5.png');
  p6 = loadImage('assets/6.png');
  p7 = loadImage('assets/7.png');
  p8 = loadImage('assets/8.png');
  p9 = loadImage('assets/9.png');
  p10 = loadImage('assets/10.png');
  p11 = loadImage('assets/11.png');
  p12 = loadImage('assets/12.png');
  p13 = loadImage('assets/13.png');
  p14 = loadImage('assets/14.png');
  p15 = loadImage('assets/15.png');
  p16 = loadImage('assets/16.png');
  p17 = loadImage('assets/17.png');
}

function setup() {
  createCanvas(500,500);
  bg = p0;
}

function draw() {
  background(bg);
}

function mouseClicked(){
  pic = random(1,17);
  pic = floor(pic);
  print(pic);
  if (pic == 1){
    bg = p1;
  }
  else if (pic == 2){
    bg = p2;
  }
  else if (pic == 3){
    bg = p3;
  }
  else if (pic == 4){
    bg = p4;
  }
  else if (pic == 5){
    bg = p5;
  }
  else if (pic == 6){
    bg = p6;
  }
  else if (pic == 7){
    bg = p7;
  }
  else if (pic == 8){
    bg = p8;
  }
  else if (pic == 9){
    bg = p9;
  }
  else if (pic == 10){
    bg = p10;
  }
  else if (pic == 11){
    bg = p11;
  }
  else if (pic == 12){
    bg = p12;
  }
  else if (pic == 13){
    bg = p13;
  }
  else if (pic == 14){
    bg = p14;
  }
  else if (pic == 15){
    bg = p15;
  }
  else if (pic == 16){
    bg = p16;
  }
  else if (pic == 17){
    bg = p17;
  }

  print(bg);
}