class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
  }

  display(){
    //if the speed of the pig is less than 3,it will visible 
    if (this.body.speed<3){
      super.display()
    }
    //if the speed is more than three pig will be removed from the world
    else{
      World.remove(world,this.body);
      //push will allow the latest settings
      push(); 
     
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
       //placing the image at the exact position of the body
       image(this.image,this.body.position.x,this.body.position.y,50,50); 
      //pop will revert back to the old settings 
      pop() ;
    }

  }

};