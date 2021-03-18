var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var pinkCG, yellowCG, redCG;
var pinkCyclist, yellowCyclist, redCyclist;

var oppPink1Img, oppRedImg, oppYellow1Img;
var player1, player2, player3;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");

  oppPink1Img = loadAnimation("images/opponent1.png", "images/opponent2.png");
  oppPink2Img = loadAnimation("images/opponent3.png");
  oppYellow1Img = loadAnimation("images/opponent4.png", "images/opponent5.png");
  oppYellow2Img = loadAnimation("images/opponent6.png");
  oppRed1Img = loadAnimation("images/opponent7.png", "images/opponent8.png");
  oppRed2Img = loadAnimation("images/opponent9.png");
  gameOverImg = loadAnimation("images/gameOver.png");

}

function setup(){
  
createCanvas(900,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  pinkCG = new Group();
  yellowCG = new Group();
  redCG = new Group();  

}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  //text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  var select = Math.round(random(1,3));
  if (World.frameCount % 200 === 0){
    if (select === 1){
      pinkCyclist();

    }
    else if (select === 2){
      redCyclist();
      
    }
    else {
      yellowCyclist();

    }
  }
   
    if (pinkCG.isTouching(mainCyclist)){
      gameState = END;
      
      player1.addAnimation("opponentPlayer1", oppPink2Img);
    }
    if (yellowCG.isTouching(mainCyclist)){
      gameState = END;
     
     player2.addAnimation("opponentPlayer2", oppYellow2Img);

    }
    if (redCG.isTouching(mainCyclist)){
      gameState = END;
      
      player3.addAnimation("opponentPlayer3", oppRed2Img);

    }
   
 }
  else if(gameState === END ){
    mainCyclist.velocityX = 0;
    path.velocityX = 0;
    mainCyclist.addAnimation("SahilRunning", mainRacerImg2);
    pinkCG.setVelocityXEach(0);
    pinkCG.setLifetimeEach(-1);

    yellowCG.setVelocityXEach(0);
    yellowCG.setLifetimeEach(-1);

    redCG.setVelocityXEach(0);
    redCG.setLifetimeEach(-1);

    gameOver = createSprite(500,150);
    gameOver.addAnimation("gameOver", gameOverImg);


 }
}

 function pinkCyclist(){

  player1 = createSprite(1100, Math.round(random(50, 250), 10, 10));
  player1.scale = 0.06;
  player1.addAnimation("opponentPlayer1", oppPink1Img);
  player1.setLifetime = 170;
  pinkCG.add(player1);

  player1.velocityX = -5;




 }

 function redCyclist(){

  player3 = createSprite(1100, Math.round(random(50, 250), 10, 10));
  player3.scale = 0.06;
  player3.addAnimation("opponentPlayer3", oppRed1Img);
  player3.setLifetime = 170;
  redCG.add(player3);

  player3.velocityX = -5;




 }

 function yellowCyclist(){

  player2 = createSprite(1100, Math.round(random(50, 250), 10, 10));
  player2.scale = 0.06;
  player2.addAnimation("opponentPlayer2", oppYellow1Img);
  player2.setLifetime = 170;
  yellowCG.add(player2);

  player2.velocityX = -5;


 

 }