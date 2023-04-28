function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  h = hour();
  m = minute();
  s = second();
  background(225);
  fill(0);
  ellipse(399,400,600,600);
  fill(250);
  textSize(100);
  textAlign(CENTER);
  text(3,600, 349, 100);
  text(6,349, 600, 100);
  text(9,100, 349, 100);
  text(12,349, 100, 100); 
  my_rect(400,400,200,3,s*6+270,color(255,255,255));
  my_rect(400,400,200,5,m*6+270,color(255,255,255));
  my_rect(400,400,200,7,h*30+270,color(255,255,255));
  ellipse(400,400,30,30);
}

function my_rect(x,y,w,h,d,c){
  push();
  translate(x,y);
  rotate(radians(d));
  fill(c);
  rect(0,-h/2,w,h);
  pop();
}