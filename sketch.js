let points=[];
let mult;
let r1;
let r2;
let g1;
let g2;
let b1;
let b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(10);
  frameRate(30);
  let density=50;
  let space=width/density;
  for(let x=0;x<width;x+=space) {
    for(let y=0;y<height;y+=space) {
      let p=createVector(x+random(-10,10),y+random(-10,10));
      points.push(p);
    }
  }
  r1=random(255);
  r2=random(255);
  g1=random(255);
  g2=random(255);
  b1=random(255);
  b2=random(255);
  mult=random(0.02,0.01)
}

function draw() {
  noStroke();
  for (let i=0;i<points.length;i++) {
    let r=map(points[i].x,0,width,r1,r2);
    let g=map(points[i].y,0,height,g1,g2);
    let b=map(points[i].x,0,width,b1,b2);
    fill(r,g,b);
    let angle=map(noise(points[i].x*mult,points[i].y*mult),0,1,0,720);
    points[i].add(createVector(cos(angle),sin(angle)));
    ellipse(points[i].x,points[i].y,1);
  }  
}

function mouseClicked() {
 save('rootfield.png'); 
} 
