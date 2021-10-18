class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:1
        }
        this.body = Bodies.circle(x,y,radius,
            options);
        this.radius=radius;
        //this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push ();
        fill("pink")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop ();
    
    }
}