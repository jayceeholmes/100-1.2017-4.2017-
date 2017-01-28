// global variables

// center
var cx;
var cy;

// background
var bg;

// category data
var data;
var humans;
var photo;
var artistic;
var animation;
var motion;
var fabrication;
var visualization;
var ccoding;
var geometric;
var algorithms;
var skill;
var laptopfree;

// circle dimensions
var diameter;


// array of labels
// var categories = ["visualization", "creative coding", geometric, algorithms, computer-free, data-collection, human-interaction, photo-manipulation, artistic, animation, motion, fabrication];

function setup() {
  createCanvas(windowWidth, windowWidth*.625);

  // center
  cx = width/2;
  cy = height/2;

  // background
  bg = loadImage("assests/100class.png");
  
  // category data 
  data = createVector(width*.3765625,width*.078125);
  humans = createVector(width*.4545703125, width*0.05078125);
  photo = createVector(width*0.59453125,width*0.06796875);
  artistic = createVector(width*.7171875,width*.16875);
  animation = createVector(width*0.75859375,width*0.275);
  motion = createVector(width*0.746875,width*0.38359375);
  fabrication = createVector(width*0.6890625,width*0.48125);
  visualization = createVector(width*0.578125,width*0.5546875);
  ccoding = createVector(width*0.42890625,width*0.55703125);
  geometric = createVector(width*0.3171875,width*0.49296875);
  algorithms = createVector(width*0.25859375,width*0.39921875);
  skill = createVector(width*0.2515625,width*0.26328125);
  laptopfree = createVector(width*0.30390625,width*0.1453125);
  
  // circle dimensions
  diameter = width*.01;
  
  
} // end setup

function draw() {
  
  // background
  background(bg);
  
  // draw triangles
  drawTriangle();
  
} // end draw

function drawTriangle() {

  // triangle
  
  // paula
  fill(255,0,0,20);
  stroke(255,0,0);
  triangle(visualization.x,visualization.y,ccoding.x, ccoding.y, artistic.x, artistic.y);
  
  // jaime
  fill(0,255,0, 20);
  stroke(0,255,0);
  triangle(algorithms.x,algorithms.y,ccoding.x,ccoding.y,skill.x,skill.y);
  
  // juan
  fill(0,255,255, 20);
  stroke(0,255,255);
  triangle(artistic.x,artistic.y,photo.x,photo.y,visualization.x,visualization.y);
  
  // craig
  fill(66, 232, 255, 20);
  stroke(66, 232, 255);
  triangle(skill.x,skill.y,ccoding.x,ccoding.y,motion.x,motion.y);
  
  // ondina
  fill(0,0,255, 20);
  stroke(0,0,255);
  triangle(skill.x,skill.y,ccoding.x,ccoding.y,motion.x,motion.y);
  
  // jaokin
  fill(0,0,255, 20);
  stroke(0,0,255);
  triangle(skill.x,skill.y,ccoding.x,ccoding.y,motion.x,motion.y);
  
  // wangshu
  fill(255,0,255, 20);
  stroke(255,0,255);
  triangle(artistic.x,artistic.y,visualization.x,visualization.y,skill.x,skill.y);
  
  // jennifer
  fill(255,255,0, 20);
  stroke(255,255,0);
  triangle(artistic.x,artistic.y,visualization.x,visualization.y,photo.x,photo.y);
  
  // regina
  fill(170, 0, 255, 20);
  stroke(170, 0, 255);
  triangle(artistic.x,artistic.y,visualization.x,visualization.y,animation.x,animation.y);
  
  // song
  fill(244, 143, 66, 20);
  stroke(244, 143, 66);
  triangle(artistic.x,artistic.y,laptopfree.x,laptopfree.y,humans.x,humans.y);
  
  // marina
  fill(66, 114, 94, 20);
  stroke(66, 114, 94);
  triangle(artistic.x,artistic.y,laptopfree.x,laptopfree.y,fabrication.x,fabrication.y);
  
  // katherine
  fill(47, 104, 3, 20);
  stroke(47, 104, 3);
  triangle(artistic.x,artistic.y,laptopfree.x,laptopfree.y,fabrication.x,fabrication.y);
  
  // jaokin
  fill(255,255,255, 20);
  stroke(255,255,255);
  triangle(data.x,data.y,ccoding.x,ccoding.y,artistic.x,artistic.y);
  
  // esther
  fill(255,0,255, 20);
  stroke(255,0,255);
  triangle(animation.x,animation.y,visualization.x,visualization.y, artistic.x,artistic.y);
  
  // kyle
  fill(0,255,255, 20);
  stroke(0,255,255);
  triangle(photo.x,photo.y,geometric.x,geometric.y, artistic.x,artistic.y);
  
  // xiwei
  fill(0,255,0, 20);
  stroke(0,255,0);
  triangle(motion.x,motion.y,visualization.x,visualization.y, humans.x, humans.y);
  
  // lisa
  fill(255,0,0, 20);
  stroke(255,0,0);
  triangle(motion.x,motion.y,humans.x,humans.y, ccoding.x, ccoding.y);  
  
  // chino
  fill(66, 114, 94, 20);
  stroke(66, 114, 94);
  triangle(ccoding.x,ccoding.y,algorithms.x,algorithms.y, photo.x, photo.y);
  
  // emmanuel
  fill(100,100,100, 20);
  stroke(100,100,100);
  triangle(motion.x,motion.y,ccoding.x,ccoding.y, geometric.x, geometric.y);  
  
  // KC
  fill(255,100,100, 20);
  stroke(255,100,100);
  triangle(animation.x,animation.y,geometric.x,geometric.y, ccoding.x, ccoding.y);  
  
  // ben
  fill(100,100,255, 20);
  stroke(100,100,255);
  triangle(motion.x,motion.y,laptopfree.x,laptopfree.y, fabrication.x, fabrication.y);  
  
  // muqing
  fill(255,100,205, 20);
  stroke(255,100,205);
  triangle(artistic.x,artistic.y,laptopfree.x,laptopfree.y, fabrication.x, fabrication.y);
  
   // justin
  fill(50,150,255, 20);
  stroke(50,150,255);
  triangle(motion.x,motion.y,ccoding.x,ccoding.y, skill.x, skill.y);  
  
  
  // renata
  fill(0,0,255, 20);
  stroke(0,0,255);
  triangle(data.x,data.y,humans.x,humans.y,laptopfree.x,laptopfree.y);
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
} // end triangle