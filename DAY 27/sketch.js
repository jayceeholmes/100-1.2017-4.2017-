// slider
var s;

var w;
var w4;
var sW;
var f;

var v;

// text
var tX;
var tY;

// line
var yB;
var l;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
    
  // slider
  s = createSlider(0,24, 12,1);
  s.position(width/2 - width/4, height/2 + height/4);
  s.style('width', '50%');
  
  
  // text
  tX = width/2 + width/4;
  tY = height/2 + height/4 + height/15;
  
  textAlign(RIGHT);
  fill(255);

  // line base
  yB = height/2 + height/4.5;
  
  // line x
  w = width/2;
  w4 = width/4;
  sW = w/24;
  f = w - w4;
  
  // line data
  l = [createVector(f, height/1.6),createVector(f + sW, height/1.5),createVector(f + 2*sW, height/3), createVector(f + 3*sW, height/3.2),createVector(f + 4*sW, height/2.9), createVector(f + 5*sW, height/1.55),createVector(f + 6*sW, height/1.6),createVector(f + 7*sW, height/5.0),createVector(f + 8*sW, height/8),createVector(f + 9*sW, height/7),createVector(f + 10*sW, height/4),createVector(f + 11*sW, height/4.5),createVector(f + 12*sW, height/3),createVector(f + 13*sW, height/2.5),createVector(f + 14*sW, height/2.7),createVector(f + 15*sW, height/6),createVector(f + 16*sW, height/9),createVector(f + 17*sW, height/2),createVector(f + 18*sW, height/1.5),createVector(f + 19*sW, height/1.7),createVector(f + 20*sW, height/1.4),createVector(f + 21*sW, height/1.5),createVector(f + 22*sW, height/1.8),createVector(f + 23*sW, height/2), createVector(f + 24*sW, height/3)];
  
} // end setup

function draw() {
  
  background(10,10,25);
  
  // value
  v = s.value();
  
  // text
  text("hour " + v,tX,tY);
  
  // line
  stroke(255);
  for(var i = 0; i <= v; i++){
    line(l[i].x,yB,l[i].x,l[i].y);
  } // end for
  
  
} // end draw