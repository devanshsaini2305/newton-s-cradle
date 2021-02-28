class bob {
    constructor(x,y,radius){
        var optionBlob ={
            resitution:0.8,
            density:5,
            friction:0.001
        }

        this.body = Bodies.circle(x,y,radius);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();

        translate(this.body.x,this.body.y)
        rotate(angle)
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("black")
        fill("yellow")
        ellipse(this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}