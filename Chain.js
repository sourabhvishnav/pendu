class Chain {

    constructor (bodyA,bodyB){
        var  options = {
            bodyA : bodyA,
            bodyB : bodyB,
            shiftness : 0.02,
            length:150
        }
        // console.log(bodyA);
        // console.log(pointB);
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display (){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(6);
        stroke(250);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
  }
}