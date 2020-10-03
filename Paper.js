class Paper {
    constructor(x, y,r) {
      var options = {
          'isStatic':false,
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(x,y,this.r/2,options);
      World.add(world, this.body);
      this.image=loadImage("paper.png")
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("blue");
      fill(255);
      ellipse(0, 0,this.r);
      pop();
    }
  };
  