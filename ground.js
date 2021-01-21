class GROUND {
    constructor(x,y,w,h){

        var gr = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,gr);
        this.width = w;
        this.height = h;

        World.add(myworld,this.body)
    }


    display(){
        fill("pink");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height) ; 
        
    }
}


