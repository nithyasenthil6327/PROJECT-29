class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    
  }
  display(){
    fill(0);
    strokeWeight(2);
    stroke(255,255,255);
    super.display();
    
  }

};
