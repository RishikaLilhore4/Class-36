var canvas, bgImg;
var gameState = 0;
var playerCount, database, form, player, game;

function setup(){
  database = firebase.database();

  canvas = createCanvas(400,400);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){

  
}

