class HAMMER {
    constructor(x,y){
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y,100,30, options);
        this.width = 100;
        this.height = 30;
        World.add(world, this.body);
    }
    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
       
        rectMode(CENTER);
        fill("yellow")
        rect(0,0, this.width, this.height);
        pop();
    }
}  