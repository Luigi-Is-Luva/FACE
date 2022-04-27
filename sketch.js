var diam1 = 0;//declaring and initilizing my custome variable to change the diameter of one of the ellipse
var diam2 = 0;

function setup() {
    createCanvas(500,500);//defining the size of my canvas
}

function mousePressed() {
  //conditional statement to reset the size of diam1 to 0 once it
  if (diam1 >=1000){
    diam1 = 0;
  }else{
  diam1=diam1+5; // increase the diam1 each time we run draw
}
  diam2 = 20; // changing the diam2 to 20 upon mousPressed
}    

function draw() {
  // put drawing code here
  background("#003366");//defining the color of the canvas
  fill("#003366"); // light blue fill
  stroke("#003366");//yellow border
  strokeWeight(5);//increase the weight of the stroke (in pixels)
  fill("#00FF00"); // green fill
  ellipse (mouseX,mouseY, 20, 20); // using the system variables mouseX and mouseY
  ellipse (width/2, height/2, diam1,diam1);// using the diam1 variable
  noFill(); // empty fill
  stroke("#FF0000"); // red stroke
  ellipse(475,475, diam2,diam2);
  fill("#003366");
  noStroke();
  ellipse(100,100,300,300); //  defining an ellipse ( x pos, y pos, diam);
  fill("#003366");
  ellipse(250,400,400,100); //  defining an ellipse ( x pos, y pos, diam);
  fill("#003366");
  noStroke();
  ellipse(400,100,300,300); //  defining an ellipse ( x pos, y pos, diam);
  fill("#003366"); // red fill
  triangle(200,170,300,200,100,400);//(x1, y1, x2, y2, x3, y3)
  fill("#003366"); // green fill
  rect(50, 100, 20, 20); // x pos, y pos, width, height
  noStroke();//remove the stroke beofre dislplaying the text
  textSize(20); //text size in pixels
  textFont("Georgia"); // change the font (make sure it's a web-safe font)
  textStyle(ITALIC); // style (i.e: italic, bold etc.)
  text("LUIGI PRESENTS", 350, 450); //text method needs the text in qoutes, x pos, y pos
  ellipse (random (0,width),random(0,height),10,10);
  console.log(diam1);
}