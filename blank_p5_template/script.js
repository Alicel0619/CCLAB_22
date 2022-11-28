console.log ("my script is loaded sucessfully")

let particles = [];
let totalNum = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //  Generate Particles
  for (let i = 0; i < totalNum; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(205, 204, 255, 3);
  textSize(10);
  text("Press A = Size Change", 10, 20);
  fill(0);
  text("Press B = Disappear", 10, 40);
  fill(0);
  text("MousePressed = Color Change", 10, 60);
  fill(0);



  for (let i = 0; i < particles.length; i++) {
    particles[i].boundary();
    particles[i].path();
    particles[i].move();
    particles[i].display();

    if (mouseIsPressed) {
      particles[i].colorchange();
    }
    // 65= A & 66=B
    if (keyCode === 65) {
      particles[i].sizechange();
    } else if (keyCode === 66) {
      particles[i].disappear();
    }
  }
}

function mousePressed() {

  particles.push(new Particle(mouseX, mouseY));
}

//----------------------------------OOP:Class
class Particle {
 
  constructor(x, y) {
    this.x = x; //define xPos
    this.y = y;
    this.dia = random(7, 27);
    this.xSpd = random(-1, 3);
    this.ySpd = 1;
    this.colorR = 210;
    this.colorG = 20;
    this.colorB = 150;
    this.alpha = 20;
    this.b1 = false;
  }

 
  move() {
    this.x += this.xSpd; 
    this.y += this.ySpd;
  }

  
  boundary() {

    if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {

      this.xSpd = -this.xSpd; 
      this.ySpd = -this.ySpd;
      this.b1 = true;
    }
  }

  colorchange() {
    this.colorR = random(0, 255);
    this.colorG = random(0, 20);
    this.colorB = random(0, 240);
    this.alpha = random(10, 30);
  }

  sizechange() {
  
    this.dia = sin(frameCount * 0.2); 
    this.dia = map(this.dia, -1, 1, 200, 20);
  }

  disappear() {
    if (this.alpha > 0) {
      this.alpha -= 1; 
    }
  }

  path() {
    if (this.b1) {
      this.xSpd += -noise(sin(frameCount * 0.00000001) * 1) + random(-1, 0); 
   

      this.ySpd += noise(sin(frameCount * 0.000001) * 1) + random(-1, 1);
    }
  }

  //  Particle's appearance
  display() {

    push();
    translate(this.x, this.y);

    translate(this.x, this.y);
    fill(this.colorR, this.colorG, this.colorB, this.alpha);
    noStroke(0);
    circle(0, 0, this.dia);
    pop();
  }

  doSomething() {
    this.x = this.x + random(-1, 7);
    this.y = this.y + random(-1, 5);
  }
}