class Ground {
  constructor(x, y, w, h) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
   // strokeWeight(4);
    //stroke("red");
    //fill(255);
    //rect(0, 0, this.width, this.height);
    rect(0, 0, this.width, this.height);
    pop();
  }
}