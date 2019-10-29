let paint_mode = false


function setup() {

    createCanvas(windowWidth, windowHeight);
    background(255);
    strokeWeight(1);
    
   //  fill(200);
   // rect(0, 0, 50, height);
    
    
  // create color and size sliders
    //rgb
  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 200);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 100);
  bSlider.position(20, 80);
    //brush size
  sSlider = createSlider(1, 200, 1);
  sSlider.position(20, 120);  
    //alpha
 aSlider = createSlider(0, 255, 255);
 aSlider.position(20, 100);
  
    
}

//canvas will still fill if you resize window
function windowResized() {
    resizeCanvas(windowWidth,windowHeight)
}


function draw() {

   
 const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
const s =sSlider.value(); 
 const a=aSlider.value();
  stroke(r, g, b, a);
push()
    strokeWeight(1)
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
  text('pen size', sSlider.x * 2 + sSlider.width, 145);
  text('alpha', aSlider.x * 2 + sSlider.width, 125);

     fill(r, g, b, a);
    
        //show current color
    rect(0, 0, 50, height);
    rect(0, 0, 150, 170);
pop()
        strokeWeight(s);
    
    
    if (paint_mode == true) {
        // draw from the previous mouse position to the current mouse position
        line(pmouseX, pmouseY, mouseX, mouseY)       
 
    }
    
}
    
   function mousePressed() {
   paint_mode = true
}

function mouseReleased() {
    paint_mode = false
}

