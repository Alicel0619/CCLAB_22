let result = []
let finalresult = 0;
let redflag;
let count = 0;
let progressBar;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer")
  redflag = new Flag(100, 100);
  progressBar= new Bar();


  // canvas.position(0, 0);
  // canvas.style("z-index","-1");

}

function draw() {
  background(255);
  textSize(100);
  fill('red');
  textFont('Georgia');
text('Results', 850, 120);
push();
textSize(20)
fill('green')
text('I am a green flag', 355,755)
pop();
push();
textSize(20)
fill('red')
text('people should watch out', 1350,755)
pop();

 
  // userresuult = document.getElementById("Question 1").innerHTML ;
  // if (userinputdetected){ 

  //     result.push( userresult);
  // }
  // if(mouseIsPressed){
  //     finalresult +=10;
  // }
  // for(let i = 0; i < 10; i++){
  //     finalresult += 1
  //     // finalresult += result[i]/// index ranges from 0 ~ arraylength - 1

  // }
  // fill(0);
  // rect(300, 300, 50, 100)

  //fill(255, 0, 0);
  //triangle(95, 140, 230, 210, 95, 270);

  redflag.display();
  progressBar.display();
}

// Button
document.getElementById('btn').onclick = function () {
  let markedCheckboxes = document.getElementsByName('question');
  for (let i = 0; i < markedCheckboxes.length; i++) {
    let checkbox = markedCheckboxes[i];
    console.log(checkbox.checked)
    if (checkbox.checked == true) {
      count = count + 1;
    }

    // if (checkbox.checked){
    //   document.body.append(Number(checkbox.value) + ' ');  
    // }  
  }
  redflag.clicknum +=1; //the first time: clicknum = 1; the second time: clicknum = 2
  if(redflag.clicknum > 1){
    redflag.set = true; // this means: the flag won't move
  }
  console.log(count)
  redflag.update(count);
  progressBar.move(count);
}

class Flag {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colorR = 0;
    this.colorG = 255;
    this.colorB = 0;
    this.set = false;
    this.clicknum = 0;
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(this.colorR, this.colorG, this.colorB);
    noStroke();
    triangle(0, 100, 135, 170, 0, 230);
    fill(25);
    rect(0, 100, 3, 270);//stick
    pop();
  }
  update(count) {
    this.move(count);
    this.changeColor(count);
  }
  move(count) {
    if(this.set != true){
      this.x = map(count, 0, 20, 100, width - 100);
    }
 

    
  }
  changeColor(count) {
    
    if(this.set != true){
      if (count <= 10) {
        this.colorR = map(count, 0, 10, 0, 255);
        this.colorG = map(count, 0, 10, 255, 255);
        this.colorB = map(count, 0, 10, 0, 0);
      } else if (count > 10 && count <= 20) {
        this.colorR = map(count, 10, 20, 255, 255);
        this.colorG = map(count, 10, 20, 255, 0);
        this.colorB = map(count, 10, 20, 0, 0);
      }
    }

  }
}

class Bar {
  constructor() {
    this.w=0;
    this.x=400;
    this.y=600;
  }
  display() {
    push();
    fill(230);
    rect(this.x, this.y, this.w, 100);
    noFill();
    rect(this.x,this.y,1000,100);// outline bar
  
    pop();
  }
  move(count) {
    this.w = this.w + 61 * count; //max count = 70
  }
}