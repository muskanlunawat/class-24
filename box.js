class BOX{
    constructor(x,y,w,h){
        var op = {
            restitution: 0.8,
            friction:1.5,
            density:1
        }
        this.body = Bodies.rectangle(x,y,w,h,op);
        this.w=w;
        this.h=h;
        World.add(myworld,this.body);
    }

    display(){
        push();
        fill("purple");  
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}