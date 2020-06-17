let img1 = []; // array variaible
var y = 0;

//variables for blur
let v = 1.0 / 9.0;
let kernel = [[ v, v, v ],[ v, v, v ],[ v, v, v ]];

// variable for sine wave
let x4 = 0;
let y4 = 0;

// Preload function
function preload() {
  for (var i = 1; i < 6; i++) {
    img1[i] = loadImage('assets/IMG_' + i + '.JPG'); // Load array of the image
  }
  // img = loadImage('assets/IMG_1.JPG'); // Load the image
}

let bubbles = [];
  let button;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;

// setup function
function setup() {
  createCanvas(screen.width, screen.height);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let img2 = random(img1);
    bubbles[i] = new Bubble(x, y, r = 150, img2);
  }

  button = createButton('Save Image');
  button.position(940, 40);
  button.style("background-color: #303030; border: none;  color: #ff0000; padding: 15px 32px;  font-size: 16px;");
  button.mousePressed(saveScreenSaver);

  button1 = createButton('Reset');
  button1.position(800, 40);
  button1.style("background-color: #303030; border: none;  color: #00ff10; padding: 15px 32px;  font-size: 16px;");
  button1.mousePressed(clean);

  button2 = createButton('Gitter');
  button2.position(660, 40);
  button2.style("background-color: #303030; border: none;  color: #00ff10; padding: 15px 32px;  font-size: 16px;");
  button2.mousePressed(gitter);

  button3 = createButton('Blur');
  button3.position(530, 40);
  button3.style("background-color: #303030; border: none;  color: #00ff10; padding: 15px 32px;  font-size: 16px;");
  button3.mousePressed(blur);

  button4 = createButton('Sine Wave');
  button4.position(350, 40);
  button4.style("background-color: #303030; border: none;  color: #00ff10; padding: 15px 32px;  font-size: 16px;");
  button4.mousePressed(sinewave);

  button5 = createButton('Pattern');
  button5.position(190, 40);
  button5.style("background-color: #303030; border: none;  color: #00ff10; padding: 15px 32px;  font-size: 16px;");
  button5.mousePressed(pattern);
}


// draw function
function draw() {


// img display loops
  if (y == 1) {
    for (let i = 0; i < bubbles.length; i++) {
      noTint()
      bubbles[i].move();
      bubbles[i].show();
    }
  } else if (y == 2) {
background(220);
noTint()
let e = Math.round(random(1,5)); //fetcing random image
 tint(0, 153, 204, 126);
image(img1[e], 220 + x4, y4);
y4 = y4+(e*2);
x4 = x4+(e*2);
 filter(BLUR,e);
} else if ( y ==3 ) {
    // sin(frequency) * amplitude
    noTint()
    let e =0;
    x4 = sin(frameCount / 25) * 100;
     e = Math.round(random(1,5)); //fetcing random image
    image(img1[e], 220 + x4, y4, 80, 80);
    y4 = y4+2;
} else if ( y == 4 ){
  let e =0;
   e = Math.round(random(1,5)); //fetcing random image
   tint(0, 153, 204, 126);
  image(img1[e], 220 + x4, y4);
  y4 = y4+(e*2);
}
}


// bubble classes for te movement of te image
class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.img2 = img;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;

  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.img2, this.x, this.y, this.r, this.r);
  }
}
function clean(){
  clear();
    y4 = 0;
}
function saveScreenSaver() {
  save('myCanvas.jpg');
}

function gitter() {
      y = 1;
}

function blur() {
      y = 2;
}

function sinewave() {
  y=3;
}

function pattern() {
  y = 4;
}
