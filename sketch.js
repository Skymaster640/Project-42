var hr, min, sec;

function setup() {
  createCanvas(800,400);
  hr = hour();
  min = minute();
  sec = second();
  
  noStroke();
}

function draw() {
  background(255,255,255); 
  
  
  text('Current hour:\n' + hr, 5, 50);

  text('Current minute:\n' + min,5,100);

  text('Current second:\n' + sec,5,150);
 

  let h = map(hr, 0, 6000, 500,  3600);
  
  let m = map(min, 0, 6000, 500, 3600);

  let s = map(sec, 0, 6000, 500,  3600);

  //at this point i'm just messing with values and seeing what happens.

  push();
  rotate(h)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,1000,500);
  pop();

  push();
  rotate(m)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,1000,500);
  pop();

  push();
  rotate(s)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,1000,500);
  pop();

  drawSprites();
}


