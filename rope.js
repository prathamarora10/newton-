class Rope
{
    constructor(body1,body2,offsetX,offsetY){
         
        this.offsetX = offsetX
        this.offsetY = offsetY
        var option = {
            body1:body1,
            body2:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
           
        }
        this.rope = Constraint.create(option)
        World.add(world,this.rope)

    }
    display(){
  
    }
}