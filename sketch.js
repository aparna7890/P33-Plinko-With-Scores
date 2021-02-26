const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
//var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight = 300;
var score = 0;
var turn = 0
var gameState = "start"


function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  //create divisions 
    for (var k = 0; k <= width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   //create plinkos: row1
    for (var j = 15; j <= width; j=j+50) 
    {    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <= width-10; j=j+50)
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 15; j <= width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 40; j <= width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }

  }
 
function draw() {
  background("black");
  Engine.update(engine);

  ground.display();

  fill(255);  textSize(20)
  text("Score : "+score, 20, 30);
  text("1000", 15, 520)
  text("500", 103, 520)
  text("100", 181, 520)
  text("100", 262, 520)
  text("500", 344, 520)
  text("1000", 415, 520)
  
  if(gameState === "end"){
     textSize(30)
     text("Game Over!", 160, 233)
  }

  fill("yellow")
  box = rect(0, 470, 1000, 2)

   //display divisions
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

  //display plinkos
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   //scoring
   if(particle != null){
      particle.display()
      console.log("hi")

      if(particle.body.position.y > 500){

         if(particle.body.position.x > 0 && particle.body.position.x < 80){
            score = score + 1000
            particle = null;
         if(turn >= 5){
            gameState = "end"
         }
      }
         
         else if(particle.body.position.x > 80 && particle.body.position.x < 160){
            score = score + 500
            particle = null;

            if(turn >= 5){
               gameState = "end"
            }
         }
         else if(particle.body.position.x > 160 && particle.body.position.x < 240){
            score = score + 100
            particle = null;

            if(turn >= 5){
               gameState = "end"
            }
         }
         else if(particle.body.position.x > 240 && particle.body.position.x < 320){
            score = score + 100
            particle = null;

            if(turn >= 5){
               gameState = "end"
            }
         }
         else if(particle.body.position.x > 320 && particle.body.position.x < 400){
            score = score + 500
            particle = null;

            if(turn >= 5){
               gameState = "end"
            }
         }
         else if(particle.body.position.x > 400 && particle.body.position.x < 480){
            score = score + 1000
            particle = null;

            if(turn >= 5){
               gameState = "end"
            }
         }
      }
   }  
}

function mousePressed(){
   if(gameState !== "end"){
      turn++
      particle = new Particle(mouseX, 10, 10, 10)
      console.log(mouseX)
   }
   
}