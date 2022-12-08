let result= [] 
let finalresult = 0;
function setup() {
let canvas = createCanvas(700, 800);
canvas.parent("canvasContainer")
// canvas.position(0, 0);
// canvas.style("z-index","-1");
    
  }
  
  function draw() { 
    background(220);
    userresuult = document.getElementById("Question 1").innerHTML ;
    if (userinputdetected){ 

        result.push( userresult);
    }
    if(mouseIsPressed){
        finalresult +=10;
    }
    // for(let i = 0; i < 10; i++){
    //     finalresult += 1
    //     // finalresult += result[i]/// index ranges from 0 ~ arraylength - 1

    // }
 rect(300, 300, 50, 10 * finalresult)
  }
  document.getElementById('btn').onclick = function() {  
  let markedCheckbox = document.getElementsByName('question');  
for (let checkbox of markedCheckbox) {  
      if (checkbox.checked)  
        document.body.append(Number(checkbox.value) + ' ');  
    }  
  }  