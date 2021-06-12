var PLAY = 1;
var END = 0;
var gameState = 0;

var ground, ground_image, invisible_ground;
var girl, girl_running, girl_collided, girlImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4;
var jumpSound, dieSound, checkpointSound;
var score,life=3
var gameOver, restart, gameOverImage, restartImage;
var zombie,zombieImg;
var heart1,heart2,heart3,heartImg;
var game,player,form;
var playerCount=0;
var allPlayers=[];
var character=[];


function preload() {
  ground_image = loadImage("Background.png");
  girl_running = loadAnimation(
    "Run (1).png",
    "Run (2).png",
    "Run (3).png",
    "Run (4).png",
    "Run (5).png",
    "Run (6).png",
    "Run (7).png",
    "Run (8).png",
    "Run (9).png",
    "Run (10).png",
    "Run (11).png",
    "Run (12).png",
    "Run (14).png",
    "Run (15).png",
    "Run (16).png",
    "Run (17).png",
    "Run (18).png",
    "Run (19).png",
    "Run (20).png"
    
  );
  zombieImg = loadImage("Stand.png")
  obstacle1 = loadImage("obstacle1.png");
  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
  checkPointSound = loadSound("checkPoint.mp3");
  gameOverImage = loadImage("gameOver1.png");
  restartImage = loadImage("restart1.png");
  girl_collided = loadImage("Dead (30).png");
  girlImage = loadImage("Dead (30).png");
  girl_dieImage = loadAnimation("Dead (30).png")
  heartImg = loadImage("heart.png")
  
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


  
}

function draw() {
  background("white");

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  


 

  //fill("pink");
  //textSize(20);
 // text("Life: " + life, 450, 250);
}

