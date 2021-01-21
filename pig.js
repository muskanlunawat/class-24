class PIG{
    constructor(x,y){
        var op = {
            restitution: 0.8,
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(x,y,60,60,op);
        this.w=60;
        this.h=60;
        World.add(myworld,this.body);
    }

    display(){
        push();
        fill("green");  
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

}