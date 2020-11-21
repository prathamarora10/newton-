class Ball5
{
    constructor(x,y){

        var option = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,65,option)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position

        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,65)
    }
}