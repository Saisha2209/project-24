class RUBBE{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:5.0,
            density:1.0
          
        }
        this.r = r;
        this.x=x
        this.y=y
      this.body=Bodies.circle(this.x, this.y, this.r, options)
       
       
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y)
        ellipseMode(RADIUS)
       
        //rectMode(CENTER);
        fill("blue");
        strokeWeight(4)
        stroke("red");
       
      
        ellipse(0,0, this.r);
        pop();
       
      }
}
