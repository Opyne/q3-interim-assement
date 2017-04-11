function setup(){
createCanvas(700,500);
background(0);
}

function draw(){
    for(var x = 0; x <=600; x = x + 50){
        strokeWeight(4);
        stroke(255);
        ellipse(x,100,50,50);
    }
    fill(255,50,50);
    ellipse(mouseX,mouseY,100,100);
}