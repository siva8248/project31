class bl{
    constructor(x,y,radius){
    var options={
        isstatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
}
display(){
    push()
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    pop();
}
}