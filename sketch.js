let mySound, amplitude, height, width;
function preload() {
  mySound = loadSound('music.mp3');
  // Music: https://www.bensound.com
}

function setup() {
  
  height = displayHeight;
  width = displayWidth;
  createCanvas(width, height);
  console.log("click the circle to play")
  amplitude = new p5.Amplitude();
}

function draw() {
  background(22);

  fill('#fae');
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 500);
  
  let shape = ellipse(width/2,height/2, diam);
  
}

function mouseClicked() {
  if (mySound.isPlaying()) {
    mySound.pause()
  }
  else {mySound.play()
  }
}



