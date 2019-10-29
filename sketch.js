let osc
let frequency = 440
let fft


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
 canvas.parent("p5")
  
    osc = new p5.Oscillator()
    osc.setType("sine")
     osc.amp(1)
      fft = new p5.FFT()
   
    osc.start()
    
    env = new p5.Envelope()
    env.setADSR(.01, .1, .7, .5)
    
    ellipseMode(RADIUS)
    
  

}

function draw(){
   
    
noFill()
    
    //noStroke()
     let r = map(frequency, 50, 1050, 0, 255)
    // let g = map(frequency, 50, 2000, 0, 255)
     let b = map(mouseX, 0, windowWidth, 50,  255)
 
    background(r, 0, b)
    
    stroke(0, 255, 0)
    let waveform = fft.waveform();
    beginShape();
    strokeWeight(2);
    for (let i = 0; i< waveform.length; i++){
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, height, 0);
        vertex(x,y);
    }
    endShape();
    
    stroke(5)
    
   //  ellipse(width/2, height/2, 200, 200, 37);
  // ellipse(width/2, height/2, 100, 100, 37);
    
    
    //square
      push()
   stroke(5)
    if (osc.getType() == 'square') {
        fill(255, 0, 0)
    } else {
        noFill()
    }
    rect(10, 10, 30, 30)
    pop()

    //sine
      push()
    stroke(5)
    if (osc.getType() == 'sine') {
        fill(0, 255, 0)
    } else {
        noFill()
    }
    ellipse(65, 25, 15, 15)
    pop()
    
    
    //sawtooth
      push()
   stroke(5)
    if (osc.getType() == 'sawtooth') {
        fill(0, 0, 255)
    } else {
       noFill()
    }
    triangle(90, 40, 120, 10, 120, 40)
    pop()
    
    
    //triangle
      push()
    stroke(5)
    if (osc.getType() == 'triangle') {
        fill(255, 255, 255)
    } else {
        noFill()
    }
    triangle(130, 40, 145, 10, 160, 40)
    pop()
  
    
    //DISP FREQ
     push()
    stroke(5)
   textSize(60);
text(frequency, 10, 100);
    text('Hz', 10, 150);
    
    pop()
  
push()
    for (var i = 0; i < width; i += width/37) {
line( i, height/2 + height/4,  i,  height/2 - height/4);
}
    pop()

    
    
    //keys 
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    push()
     stroke(0, 255, 0)
   textSize(50);
    let x=width/37
    let y1 = height/2 + height/4
    let y2 = height/1.9 - height/4
    let y = height/2.3
    let y3 =height/2 - height/4
    let y4= height/2
    //black keys
    push()
    noStroke()
    fill(0,0,0)
    rect(x*2,y2,x,y)
    
    rect(x*4,y2,x,y)
    
     rect(x*7,y2,x,y)
     rect(x*9,y2,x,y)
     rect(x*11,y2,x,y)
     rect(x*14,y2,x,y)
     rect(x*16,y2,x,y)
     rect(x*19,y2,x,y)
     rect(x*21,y2,x,y)
     rect(x*23,y2,x,y)
     rect(x*26,y2,x,y)
     rect(x*28,y2,x,y)
    rect(x*31,y2,x,y)
    rect(x*33,y2,x,y)
    rect(x*35,y2,x,y)
    
    
    pop()
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //key labels black
     push()
    noFill()
    stroke(0,255,0);
    text('1', x*2,y2+x)
    text('2', x*4,y2+x)
   text('4', x*7,y2+x)
    text('5', x*9,y2+x)
     text('6', x*11,y2+x)
    text('8', x*14,y2+x)
     text('9', x*16,y2+x)
    text('a', x*19,y2+x)
     text('s', x*21,y2+x)
    text('d', x*23,y2+x)
    text('g', x*26,y2+x)
     text('h', x*28,y2+x)
    text('k', x*31,y2+x)
     text('l', x*33,y2+x)
    text(';', x*35,y2+x)
    pop()
    
    // key labels white
       push()
    noFill()
    stroke(5);
    text('`', x,y4)
   text('q', x*3,y4)
    text('w', x*5,y4)
    text('e', x*6,y4)
    text('r', x*8,y4)
    text('t', x*10,y4)
    text('y', x*12,y4)
    text('u', x*13,y4)
    text('i', x*15,y4)
    text('o', x*17,y4)
    text('p', x*18,y4)
    text('z', x*20,y4)
    text('x', x*22,y4)
    text('c', x*24,y4)
    text('v', x*25,y4)
    text('b', x*27,y4)
    text('n', x*29,y4)
       text('m', x*30,y4)
    text(',', x*32,y4)
    text('.', x*17,y4)
    text('.', x*34,y4)
    text('?', x*36,y4)
    text('Shft', x*37,y4)
    
    pop()
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//c3 "`"
  if (keyIsDown(192)) {
    frequency = 130.813;
       osc.freq(frequency)
      
          rect(x,y3,x,y3*2)

      text('C3', x, y4);
  }

  // c#3 (1)
  if (keyIsDown(49)) {
    frequency = 138.591;
       osc.freq(frequency)
      rect(x*2,y2,x,y)
      text('C#3', x*2, y2);
  }
    
//d3 (q)
  if (keyIsDown(81)) {
    frequency = 146.182;
       osc.freq(frequency)
        text('D3', x*3, y1);
                rect(x*3,y3,x,y3*2)

  }
    
// d#3 (2)
  if (keyIsDown(50)) {
    frequency = 155.563;
       osc.freq(frequency)
            text('D#3', x*4, y2);
    rect(x*4,y2,x,y)

  }

 // e3 w
  if (keyIsDown(87)) {
    frequency = 164.814;
       osc.freq(frequency)
            text('E3', x*5, y1);
                rect(x*5,y3,x,y3*2)


  }

 // f3 e
  if (keyIsDown(69)) {
    frequency = 174.614;
       osc.freq(frequency)
            text('F3', x*6, y1);
          rect(x*6,y3,x,y3*2)

  }

 //f#3 4
  if (keyIsDown(52)) {
    frequency = 184.997;
       osc.freq(frequency)
            text('F#3', x*7, y2);
           rect(x*7,y2,x,y)


  }

 //g3 r
  if (keyIsDown(82)) {
    frequency = 195.998;
       osc.freq(frequency)
            text('G3', x*8, y1);
          rect(x*8,y3,x,y3*2)

  }

 // g#3 5
  if (keyIsDown(53)) {
    frequency = 207.652;
       osc.freq(frequency)
            text('G#3', x*9, y2);
     rect(x*9,y2,x,y)

  }

 //a3 t
  if (keyIsDown(84)) {
    frequency = 220;
       osc.freq(frequency)
            text('A3', x*10, y1);
                rect(x*10,y3,x,y3*2)


  }

 // a#3 6
  if (keyIsDown(54)) {
    frequency = 233.082;
       osc.freq(frequency)
            text('A#3', x*11, y2);
     rect(x*11,y2,x,y)

  }

 // b3 y
  if (keyIsDown(89)) {
    frequency = 246.942;
       osc.freq(frequency)
            text('B3', x*12, y1);
          rect(x*12,y3,x,y3*2)

  }

 // c4 u
  if (keyIsDown(85)) {
    frequency = 261.626;
       osc.freq(frequency)
            text('C4', x*13, y1);
          rect(x*13,y3,x,y3*2)

  }

 // c#4 8
  if (keyIsDown(56)) {
    frequency = 277.183;
       osc.freq(frequency)
            text('C#4', x*14, y2);
     rect(x*14,y2,x,y)

  }

 // d4 i
  if (keyIsDown(73)) {
    frequency = 293.665;
       osc.freq(frequency)
            text('D4', x*15, y1);
          rect(x*15,y3,x,y3*2)

  }

 // d#4 9
  if (keyIsDown(57)) {
    frequency = 311.127;
       osc.freq(frequency)
            text('D#4', x*16, y2);
     rect(x*16,y2,x,y)

  }

 // e4 0
  if (keyIsDown(79)) {
    frequency = 329.628;
       osc.freq(frequency)
            text('E4', x*17, y1);
          rect(x*17,y3,x,y3*2)

  }

 // f4
  if (keyIsDown(80)) {
    frequency = 349.228;
       osc.freq(frequency)
            text('F4', x*18, y1);
          rect(x*18,y3,x,y3*2)

  }

 //f#4 a
  if (keyIsDown(65)) {
    frequency = 369.994;
       osc.freq(frequency)
            text('F#4', x*19, y2);
     rect(x*19,y2,x,y)

  }

 // g4 z
  if (keyIsDown(90)) {
    frequency = 391.995;
       osc.freq(frequency)
            text('G4', x*20, y1);
          rect(x*20,y3,x,y3*2)

  }

 // g#4 s
  if (keyIsDown(83)) {
    frequency = 415.305;
       osc.freq(frequency)
            text('G#4', x*21, y2);
           rect(x*21,y2,x,y)


  }

 // a4 x
  if (keyIsDown(88)) {
    frequency = 440;
       osc.freq(frequency)
            text('A4', x*22, y1);
          rect(x*22,y3,x,y3*2)

  }

 // a#4 d
  if (keyIsDown(68)) {
    frequency = 466.164;
       osc.freq(frequency)
            text('A#4', x*23, y2);
           rect(x*23,y2,x,y)


  }

 //b4 c
  if (keyIsDown(67)) {
    frequency = 493.883;
       osc.freq(frequency)
            text('B4', x*24, y1);
          rect(x*24,y3,x,y3*2)

  }

 // c5 v
  if (keyIsDown(86)) {
    frequency = 523.251;
       osc.freq(frequency)
            text('C5', x*25, y1);
          rect(x*25,y3,x,y3*2)

  }

 //c#5 g
  if (keyIsDown(71)) {
    frequency = 554.365;
       osc.freq(frequency)
            text('C#5', x*26, y2);
           rect(x*26,y2,x,y)


  }

 // d5 b
  if (keyIsDown(66)) {
    frequency = 587.330;
       osc.freq(frequency)
            text('D5', x*27, y1);
          rect(x*27,y3,x,y3*2)

  }

 // d#5 h
  if (keyIsDown(72)) {
    frequency = 622.254;
       osc.freq(frequency)
            text('D#5', x*28, y2);
     rect(x*28,y2,x,y)

  }

 // e5 n
  if (keyIsDown(78)) {
    frequency = 659.255;
       osc.freq(frequency)
            text('E5', x*29, y1);
          rect(x*29,y3,x,y3*2)

  }

 // f5 m
  if (keyIsDown(77)) {
    frequency = 698.456;
       osc.freq(frequency)
            text('F5', x*30, y1);
          rect(x*30,y3,x,y3*2)

  }

 // f#5 k
  if (keyIsDown(75)) {
    frequency = 739.989;
       osc.freq(frequency)
            text('F#5', x*31, y2);
     rect(x*31,y2,x,y)

  }

 // g5 ,
  if (keyIsDown(188)) {
    frequency = 783.991;
       osc.freq(frequency)
            text('G5', x*32, y1);
          rect(x*32,y3,x,y3*2)

  }

 // g#5 l
  if (keyIsDown(76)) {
    frequency = 830.609;
       osc.freq(frequency)
            text('G#5', x*33, y2);
     rect(x*33,y2,x,y)

  }

 // a5 .
  if (keyIsDown(190)) {
    frequency = 880;
       osc.freq(frequency)
            text('A5', x*34, y1);
          rect(x*34,y3,x,y3*2)

  }

 //a#5 ;
  if (keyIsDown(186)) {
    frequency = 932.328;
       osc.freq(frequency)
            text('A#5', x*35, y2);
     rect(x*35,y2,x,y)

  }

 //b5 /
  if (keyIsDown(191)) {
    frequency = 987.767;
       osc.freq(frequency)
            text('B5', x*36, y1);
          rect(x*36,y3,x,y3*2)

  }
    
    //c6 rtshift
  if (keyIsDown(16)) {
    frequency = 1046.50;
       osc.freq(frequency)
            text('C6', x*37, y1);
          rect(x*37,y3,x,y3*2)

  } 

 // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
   //these keys have no notes
     //c6 rtshift
  if (keyIsDown(51)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(55)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(48)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(70)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(74)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(189)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(187)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(219)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(221)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    if (keyIsDown(222)) {
     frequency = 0;
      osc.freq(frequency)
  }
    
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
   pop()
    
}
//canvas will still fill if you resize window
function windowResized() {
    resizeCanvas(windowWidth,windowHeight)
}

function mousePressed() {
   // osc.start()
    osc.amp(env)
    env.triggerAttack()
    
    circle_radius = 100
    
    mouseDragged()
}

function mouseReleased() {
  //  osc.stop()
    env.triggerRelease()
    
    circle_radius= 0
}

function mouseDragged() {
    frequency = map(mouseY, 0, height, 50, 2000)
    osc.freq(frequency)
    
    // 2 speakers
    let pan = map(mouseX, 0, width, -1, 1)
    osc.pan(pan)
}

function mouseClicked() {    

    // test if we clicked in square 
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        print('button clicked')
         if (osc.getType() == 'sine', 'sawtooth', 'triangle') {
           osc.setType('square')
         } //else {
           //  osc.setType('sine')
       //  }
        strokeWeight(50)
    }
    //sine button
     if (mouseX > 50 && mouseX < 80 && mouseY > 10 && mouseY < 40) {
        print('button clicked')
         if (osc.getType() == 'square', 'sawtooth', 'triangle') {
           osc.setType('sine')
         } //else {
           //  osc.setType('sine')
       //  }
        strokeWeight(50)
    }
    //sawtooth button
      if (mouseX > 90 && mouseX < 120 && mouseY > 10 && mouseY < 40) {
        print('button clicked')
         if (osc.getType() == 'square', 'sine', 'triangle') {
           osc.setType('sawtooth')
         } //else {
           //  osc.setType('sine')
       //  }
        strokeWeight(50)
    }
    //triangle button
      if (mouseX > 130 && mouseX < 160 && mouseY > 10 && mouseY < 40) {
        print('button clicked')
         if (osc.getType() == 'square', 'sawtooth', 'sine') {
           osc.setType('triangle')
         } //else {
           //  osc.setType('sine')
       //  }
        strokeWeight(50)
    }
    
}

function keyPressed() {
      osc.amp(env)
    env.triggerAttack()
 
}

function keyReleased() {
      env.triggerRelease()
}
  