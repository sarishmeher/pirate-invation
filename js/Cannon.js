class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_Image=loadImage("assets/canon.png");
    this.cannon_Base=loadImage("assets/cannonBase.png")
  }
  display(){
    push();
imageMode(CENTER);
image(this.cannon_Image,this.x,this.y,this.width,this.height)
pop();


image(this.cannon_Base,70,20,200,200);
noFill()

  }
}
