var bgImg;
var tom ,catImg1 ,catImg2,catImg3;
var jerry, jerryImg1, jerryImg2,jerryImg3;

function preload() {
    //load the images here
   bgImg = loadImage("images/garden.png") ;
   catImg1 = loadImage("images/cat1.png") ;
   catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
   catImg3 = loadImage("images/cat4.png") ;
   jerryImg1 = loadImage("images/mouse1.png");
   jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   jerryImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(870,700,);
    tom.addImage("tomSitting", catImg1);
    tom.scale=0.2;

    jerry=createSprite(200,700,);
    jerry.addImage("jerryStanding", jerryImg1);
    jerry.scale=0.14;
 
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<(tom.width - jerry.width)/2)
    {
        jerry.addAnimation("jerryHappy",jerryImg3);
        jerry.changeAnimation("jerryHappy");
        jerry.frameDelay=15; 
        jerry.x=150;
        jerry.y=600;

        tom.addAnimation("tomHappy",catImg3);
        tom.changeAnimation("tomHappy");
        tom.frameDelay=30;
        tom.velocityX=0;
        tom.y=600;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){

    jerry.addAnimation("jerryTeasing",jerryImg2);
    jerry.changeAnimation("jerryTeasing");
    jerry.frameDelay=15;

    tom.addAnimation("tomWalking",catImg2);
    tom.changeAnimation("tomWalking");
    tom.frameDelay=30;
    tom.velocityX=-5;

  }


}
