class Rope {
  constructor(bodyA, bodyB) {
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      stiffness: 0.5,
      length: 250
    };

  
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      push();

      stroke(48, 22, 8);
      strokeWeight(3);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}

