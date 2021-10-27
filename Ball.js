class Ball {
  constructor(x, y, r) {
    var options = { 
      density: 0.1, 
      };

    this.body = Bodies.rectangle(x, y, r,r, options);
    this.radius = r;
   
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
   // rotate(angle);
    imageMode(CENTER)
    //ellipse(0, 0, this.radius, this.radius);
    image(cartImg, 0, 0, this.radius, this.radius);
    pop();
  }
}
