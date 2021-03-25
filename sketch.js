const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ground1;
var ground2;
var ground3;
//var box1;
var i = 0;
var stack, stack1,stack2;
var poly;
var sling;
var drag = true;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stack = new Stack(7,1000,200,20)
    stack1 = new Stack(5,600,200,30)
    stack2 = new Stack(11,800,300,10)

    //ground = new Ground(600,390,1200,10);
    ground1 = new Ground(980+(160/2),250,160,10);
    ground2 = new Ground(570+(180/2),250,180,10);
    ground3 = new Ground(785+(130/2),350,130,10);

    poly = new Polygon(150,250,20);
    sling = new SlingShot(poly.body,{x:150,y:250});

    
 
  


    
}

function draw(){
    background(0);
    Engine.update(engine);
    //ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    stack.display();
    stack1.display();
    stack2.display();
    poly.display();
    sling.display();

    if(drag === false){
        text('Press Space to get chances!',30,30);
    }
    
    

 
}

function mouseDragged(){
    if(drag === true){
        Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
    }
    
    
}


function mouseReleased(){
    sling.fly();
    drag = false;
    
}



function keyPressed(){
	if(keyCode === 32){
		sling.attach();
		drag = true;
	}
}

