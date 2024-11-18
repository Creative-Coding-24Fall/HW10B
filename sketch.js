let sound
let peaks=[]
let font
function preload(){
  sound=loadSound("Mazzy Star - She's My Baby.mp3")
  font=loadFont("rogue hero.ttf")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font)
  peaks=sound.getPeaks()
  background(151, 94, 187)
  let c1=color(103*0.7, 71*0.7, 143*0.7)
  let c2=color(163, 136, 208)
  for(let y=0;y<height;y++){
    stroke(y/height*255)
 
    let c=lerpColor(c1,c2,map(y,0,height,0,1))
    stroke(c)
    line(0,y,width,y)
  }
  let ts=width*0.1
  textSize(ts)

  for(let i=0;i<peaks.length;i++){
    noStroke()
    fill(0)
   rect(map(i,0,peaks.length,0,width) ,0,width/peaks.length,peaks[i]*height)
   rect(map(i,0,peaks.length,0,width) ,height,width/peaks.length,-peaks[i]*height)
  }
  fill(248)
  textAlign(CENTER, CENTER)
  strokeWeight(20)
  stroke(255,100)
text("SHE'S MY BABY",width/2,height/2)
textSize(ts*0.4)
strokeWeight(10)
text("Mazzy Star",width/2,height/2+ts*2)
}
