class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[]
    this.smokeImage=loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>320 && this.body.velocity.x>11){
      var position=[this.body.position.x,this.body.position.y]
      this.trajectory.push(position) 
    }
    // console.log(this.trajectory);
    //   [  [x1,y1]  ,   [x2,y2]  ,  [x3,y3]   ]
    //this.trajectory[i][0]>>x
    //this.trajectory[i][1]>>y
    var length=this.trajectory.length;
    for(var i=0;i<length;i++){
      
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
    }
    
  }
}
