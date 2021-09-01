
var canvas, backgroundAnimation,bg;

var form, player, game;
var player1, coin , coins;
var man1,man2;
var friends , friend1, friend2, friend3;
var friend1_img, friend2_img , friend3_img;

function preload(){
  friend1_img = loadImage("friend1.png");
  friend2_img = loadImage("friend2.png");
  friend3_img = loadImage("friend3.png");
  player1= loadImage("player.png");
  coins = loadImage("coin.png");
  backgroundAnimation=loadAnimation("bg1.png","bg2.png");
}

function setup(){
  canvas = createCanvas(windowWidth , windowHeight);
  man1 = createSprite(0,200,50,50);
   man2 = createSprite(0,200,50,50);
   bg = createSprite(800,800);
  bg.addAnimation("background",backgroundAnimation);
}

  //database = firebase.database();
 //game=new Game();
  //game.getState();
  //game.start();




function draw(){
  drawSprites();

  }