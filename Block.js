class Block{
    constructor(x, y, width, height){
      this.Visiblity = 255;
        var options = {
          restitution :0.4,
           friction :0.0

            
         
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       
      
        
        World.add(world, this.body);
    }

  display() {
    if(this.body.speed < 3){
      
     }
     else{
       World.remove(world, this.body);
       var angle = this.body.angle;
       var pos= this.body.position;
       push();
       this.Visiblity = this.Visiblity - 5;
      translate(pos.x, pos.y); 
       rectMode(CENTER); 
       fill("pink");
       rect(0,0,this.width, this.height);
       pop();
    
       
     }
     

    
       }
  
}
