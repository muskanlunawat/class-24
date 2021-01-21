class LOG {
    constructor(x, y, height, a) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, a);
      World.add(myworld, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("purple");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };