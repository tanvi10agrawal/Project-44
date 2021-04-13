var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 700, 50);
  text("Answer in all caps and use a space between words.", 500, 425);
  text("Bonus Hint: Code1 and Code3 answers are in the format (A  _ _ _ _ ...) ", 325, 450);
  text("Bonus Hint 2: Code2 answer is in the format (YOUR  _ _ _ _ ...) ", 325, 475);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}