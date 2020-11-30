const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [], plinkos = [], divisions = [], ground, col;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width / 2, height, width, 20, { isStatic: true });
  World.add(world, ground);

  Engine.run(engine);

  //Divisions

  for (var i = 0; i <= width; i += 80) {
    divisions.push(new Division(i, 650, 10, 300));
  }

  //Plinkos

  for (var i = 40; i <= width; i += 50) {
    plinkos.push(new Plinko(i, 75));
  }

  for (var i = 15; i <= width - 10; i += 50) {
    plinkos.push(new Plinko(i, 175));
  }

  for (var i = 40; i <= width; i += 50) {
    plinkos.push(new Plinko(i, 275));
  }

  for (var i = 15; i <= width - 10; i += 50) {
    plinkos.push(new Plinko(i, 375));
  }

}
function draw() {
  background(0);

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);

  col = random(255),random(255),random(255);

  //Particles
  if (frameCount % 90 === 0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10,rgb(random(0,255),random(0,255),random(0,255))))
  }

  //Displaying

  for (var j = 0; j < divisions.length; j++) {
    divisions[j].show();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].show();
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].show();
  }
  

}