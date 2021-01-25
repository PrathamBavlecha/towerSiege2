class Box extends BaseClass {
    constructor(x, y, color){
      super(x,y,30,30);
      this.color = color
    }
   display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
        fill (this.color)
        super.display();
    }else{
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 0.05;
      pop();
    }
  }
  };
