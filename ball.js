class Ball{
    constructor(x,y,width,height){
    var prop={
    restitution: 0.5,
  
    }
    this.body = Matter.Bodies.rectangle(x,y,width,height,prop);
    this.width = width ;
    this.height = height;
    // add to the world
    Matter.World.add(world,this.body)

    }
    display(){
    var position = this.body.position;
    var angle;
    push()
     translate(position.x,position.y);
     rotate(angle);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
    pop()
    }

}