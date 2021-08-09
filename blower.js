class Blower{
    constructor(x,y,width,height){
    var prop={
    isStatic:true,
    }
    this.body = Matter.Bodies.rectangle(x,y,width,height,prop);
    this.width = width ;
    this.height = height;
    // add to the world
    Matter.World.add(world,this.body)

    }
    display(){
    var position = this.body.position
    push()
     translate(position.x,position.y);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
    pop()
    }

}