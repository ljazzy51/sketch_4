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

let current_line = 'Hello World my name is lilyanne';
let start_line = 100;
let next_line = 150;
let end_line = 1285;

function writing(font){
    fill(224, 43, 137);
    textFont(font, 75);
    text(current_line, start_line, next_line);
    print(textWidth(current_line));
}
let nline_start;

function new_line(){
  if(textWidth(current_line) >= end_line){
    current_line = '';
    next_line = next_line + 80;
    text(current_line, start_line, next_line);
    //current_line = '';
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    current_line += key;
    print(current_line);
  }
  if(keyCode == DELETE){
    current_line = current_line.length - 1;
    print(current_line);
  }
}
