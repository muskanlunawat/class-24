class BIRD{
    constructor(x,y){
        var op = {
            restitution: 0.8,
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(x,y,65,65,op);
        this.w=65;
        this.h=65;
        World.add(myworld,this.body);
    }

    display(){
        this.body.position.x = mouseX; 
        this.body.position.y = mouseY;
        push();
        fill("red");  
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

}