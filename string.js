


class rope{
    constructor(bodyA, pointB){
        var opts = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0,
           length:400
      
        }
  pointB=pointB
        this.sling = Constraint.create(opts);
        World.add(world, this.sling);
        
    }


    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}