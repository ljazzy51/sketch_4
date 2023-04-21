let row;
let pen;
let vase;
let flower;
let ink_splatter;
let ink_well;
let cover;

// preloads the images that are used in the program
function preload(){
  pen = loadImage('data/fountain_pen.png');
  vase = loadImage('data/flowers_one.png');
  flower = loadImage('data/flowers_two.png');
  ink_splatter = loadImage('data/ink_splatter.png');
  ink_well = loadImage('data/ink_well.png');
  cover = loadImage('data/cover.png');
  handwriting = loadFont('data/writing.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

// the main code that isnt just event listeners that allow the program to run appropriately according to the user's interaction
function draw() {
  open_journal();
  if (cover_clicked == true){
    writing(handwriting);
    use_pen();
  }
  show_last();
  new_line();
}


