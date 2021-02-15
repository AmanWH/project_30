class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }
  display(){
    if(this.body.speed>5){
      World.remove(world,this.body);
      this.visibility=this.visibility-3;
      push()
      tint(255,this.visibility);
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop()
    }
    else{
      super.display();
    }
  }
};