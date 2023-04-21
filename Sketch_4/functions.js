// All of the functions for the program

// creates the bullet journal design and the general spacing for the inside of the journal
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
  
// images and text that appear when the program is first runn before the user "opens the journal" by clicking on the cover
function open_journal(){
    if(cover_clicked == false){
      image(cover, 142, 45);
      image(pen, 800, 200, 200, 200);
      image(ink_well, 750, 300, 200, 200);
      image(ink_splatter, 700, 200, 100, 100);
      image(ink_splatter, 900, 600, 100, 100);
      image(ink_splatter, 500, 500, 100, 100);
      image(vase, 1000, 200, 400, 450);

      cover_words(handwriting);
    
    }
    if((mouseIsPressed == true) && (mouseX >= 142 && mouseX <= 658) && (mouseY >= 45 && mouseY <= 755)){
      cover_clicked = true;
    }
    if (cover_clicked == true){
      background(255);
      draw_points();
    }
}

// formatt8ing for the cover and the images 
function cover_words(font){
  fill(224, 43, 137);
  textFont(font, 50);
  text("Click the cover to write a letter", 700, 150);
  print(textWidth(current_line));
}

let current_line = '';
let last_line = [];
let start_line = 100;
let next_line = 70;
let end_line = 1285;

let prev_line = '';

// formatting for the font and style of the text
function writing(font){
    fill(224, 43, 137);
    textFont(font, 75);
    text(current_line, start_line, next_line);
    print(textWidth(current_line));
}

let line_y;
line_y = [];
let line_index = last_line.length - 1;
let y_index = line_y.length - 1;

// I know this is not the cleanest way to do ths but I was losng my marbles with the for loops and other methods because it wouldnt work 
// Finished is better than perfect! I dont have the energy to fight with this next line/ previous line anymore lol 
// Displays the previous lines of code while it moves on to writing the next line of the letter 
function show_last(){
  if(next_line > 70){
    text(last_line[0], start_line, line_y[0]);
    text(last_line[1], start_line, line_y[1]);
    text(last_line[2], start_line, line_y[2]);
    text(last_line[3], start_line, line_y[3]);
    text(last_line[4], start_line, line_y[4]);
    text(last_line[5], start_line, line_y[5]);
    text(last_line[6], start_line, line_y[6]);
    text(last_line[7], start_line, line_y[7]);
    text(last_line[8], start_line, line_y[8]);

  }
}

// have the text move onto the next line when it reaches the edge of the browser while it is fully expanded 
function new_line(){
  if(textWidth(current_line) >= end_line){
    prev_line = current_line;
    last_line.push(prev_line);
    current_line = '';
    next_line = next_line + 80;
    line_y.push(next_line - 80);
    text(current_line, start_line, next_line);
  }
}

//allow for letters in the current line to be deleted if you make a typo while you are writing 
function keyPressed(){
  if(keyCode == BACKSPACE){
    current_line = current_line.substring(0, current_line.length - 1);
    print(current_line);
  }
}

// add letters to the end of the current line of text as if you are writing new words 
function keyTyped() {
  if (keyCode >= 32) {
    current_line += key;
    print(current_line);
  }
}


let penX;
let penY;

//have the pen move with the text to appear that it is writing it 
function use_pen(){
  penX = textWidth(current_line) + 80;
  penY = next_line;
  image(pen, penX, penY - 100, 100, 100);
}
