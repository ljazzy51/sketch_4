// All of the functions for the program

function draw_points(){
    for(let y = 0; y <= height; y += 80 ){
      for(let x = 0; x <= width; x += 80){
        noStroke();
        fill(0);
        ellipse(x, y, 10, 10);
      }
    }
    row = 10;
}

let cover_clicked = false;
  
function open_journal(){
    if(cover_clicked == false){
      image(cover, 142, 45);
    }
    if((mouseIsPressed == true) && (mouseX >= 142 && mouseX <= 658) && (mouseY >= 45 && mouseY <= 755)){
      cover_clicked = true;
    }
    if (cover_clicked == true){
      background(255);
      draw_points();
    }
}

function writing(font){
    fill(224, 43, 137);
    textFont(font, 75);
    text('Hello World', 100, 150);
}