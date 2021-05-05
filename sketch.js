const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var g1,g2,g3,g4,g5,g6,g7,g8;
var p1,p2,p3,p4,p5,p6,p7,p8;
var bl1 =[];

function setup() {
  createCanvas(600,700);
  engine = Engine.create();
  world = engine.world;
  g1 = new Gd(300,690,600,10);
  g2 = new Gd(5,585,10,200);
  g3 = new Gd(95,585,10,200);
  g4 = new Gd(195,585,10,200);
  g5 = new Gd(295,585,10,200);
  g6 = new Gd(395,585,10,200);
  g7 = new Gd(495,585,10,200);
  g8 = new Gd(595,585,10,200);

  p1 = new plk(50,75,10);
  p2 = new plk(100,75,10);
  p3 = new plk(150,75,10);
  p4 = new plk(200,75,10);
  p5 = new plk(250,75,10);
  p6 = new plk(300,75,10);
  p7 = new plk(350,75,10);
  p8 = new plk(400,75,10);
  p9 = new plk(450,75,10);
  p10 = new plk(500,75,10);
  p11 = new plk(550,75,10); 

  k1 =new plk(20,175,10);
  k2 =new plk(70,175,10);
  k3 =new plk(120,175,10);
  k4 =new plk(170,175,10);
  k5 =new plk(220,175,10);
  k6 =new plk(270,175,10);
  k7 =new plk(320,175,10);
  k8 =new plk(370,175,10);
  k9 =new plk(420,175,10);
  k10 =new plk(470,175,10);
  k11 =new plk(520,175,10);
  k12 =new plk(570,175,10);

  l1 =new plk(50,275,10);
  l2 = new plk(100,275,10);
  l3 = new plk(150,275,10);
  l4 = new plk(200,275,10);
  l5 = new plk(250,275,10);
  l6 = new plk(300,275,10);
  l7 = new plk(350,275,10);
  l8 = new plk(400,275,10);
  l9 = new plk(450,275,10);
  l10 = new plk(500,275,10);
  l11 = new plk(550,275,10); 

  n1 =new plk(20,375,10);
  n2 =new plk(70,375,10);
  n3 =new plk(120,375,10);
  n4 =new plk(170,375,10);
  n5 =new plk(220,375,10);
  n6 =new plk(270,375,10);
  n7 =new plk(320,375,10);
  n8 =new plk(370,375,10);
  n9 =new plk(420,375,10);
  n10 =new plk(470,375,10);
  n11 =new plk(520,375,10);
  n12 =new plk(570,375,10);

 Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);
  g1.display();
  g2.display();
  g3.display();
  g4.display();
  g5.display();
  g6.display();
  g7.display();
  g8.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();

  k1.display();
  k2.display();
  k3.display();
  k4.display();
  k5.display();
  k6.display();
  k7.display();
  k8.display();
  k9.display();
  k10.display();
  k11.display();
  k12.display();

  l1.display();
  l2.display();
  l3.display();
  l4.display();
  l5.display();
  l6.display();
  l7.display();
  l8.display();
  l5.display();
  l6.display();
  l7.display();
  l8.display();
  l9.display();
  l10.display();
  l11.display();

  n1.display();
  n2.display();
  n3.display();
  n4.display();
  n5.display();
  n6.display();
  n7.display();
  n8.display();
  n9.display();
  n10.display();
  n11.display();
  n12.display();

  if (frameCount %60 === 0) {
    bl1.push(new bl(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<bl1.length; h++) {
    bl1[h].display();
  }

  drawSprites();
}