const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){

    createCanvas(800, 600);

    engine = Engine.create();

    world = engine.world;

    bob1 = new Pendulum(300, 400, "pink");
    bob2 = new Pendulum(330, 400, "pink");
    bob3 = new Pendulum(360, 400, "pink");
    bob4 = new Pendulum(390, 400, "pink");
    bob5 = new Pendulum(420, 400, "pink");

    sling1 = new Sling(bob1.body, {x:290, y:200});
    sling2 = new Sling(bob2.body, {x:330, y:200});
    sling3 = new Sling(bob3.body, {x:370, y:200});
    sling4 = new Sling(bob4.body, {x:410, y:200});
    sling5 = new Sling(bob5.body, {x:450, y:200});

}

function draw(){

    background("black");

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged(){

    Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});

}