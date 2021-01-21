//step1: create a class/design
//step2: define properties and functions inside the class
//step3: create a new object
//step4: saving the object in computer memory
//step5: changing properties if you want to
//step6: calling the function

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var myengine, myworld;
var box1,box2,box3,box4,box5;
var ground1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);     
    myengine = Engine.create(); //.world
    myworld = myengine.world;

    box1 = new BOX(700,320,70,70);
    box2 = new BOX(920,320,70,70);
    box3 = new BOX(700,240,70,70);
    box4 = new BOX(920,240,70,70);
    box5 = new BOX(810,160,70,70);
    
    ground1 = new GROUND(600,390,1200,20);  

    bird1 = new BIRD(50,10);
    
    pig1 = new PIG(810,320);
    pig2 = new PIG(810,240);
    
    log1 = new LOG(810,260,300,PI/2);
    log2 = new LOG(810,180,300,PI/2);
    log3 = new LOG(760,120,150,PI/7);
    log4 = new LOG(870,120,150,-PI/7);
}


function draw(){
    background("cyan");
    Engine.update(myengine);

    box1.display();
    box2.display();

    box3.display();
    box4.display();
    box5.display();

    ground1.display();

    bird1.display();
    
    pig1.display();
    pig2.display();
    
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}
