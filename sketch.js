const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine,world;
var ground, division, plinko;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(0,790,970,10);
  //division= new Division(100,550,10,500);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50)
  {

    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<=width-10; j=j+50)
  {

    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j <=width; j=j+50)
  {

    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j<=width-10; j=j+50)
  {

    plinkos.push(new Plinko(j,375));
  }
}

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;



function draw() {
  background("black");

  Engine.update(engine);
   ground.display();

   for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();

}
   
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));

  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
 
}