var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var bg;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    catImg1 = loadAnimation("images/catImg1.png");
    catImg2 = loadAnimation("images/catImg2.png","images/catImg3");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(300,700);
    cat.addAnimation("catStanding",catImg1);
    cat.scale = 0.5;

    mouse = createSprite(600,300);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale = 0.5;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.changeAnimation("mouseStanding",mouseImg1);
        cat.changeAnimation("catStanding",catImg1);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }

}
