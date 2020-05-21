class Chain {

    constructor (bodyA,bodyB){
        var  options = {
            bodyA : bodyA,
            bodyB : bodyB,
            shiftness : 0.08,
            length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display (){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        fill("white");
        strokeWeight(6);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
  }
}