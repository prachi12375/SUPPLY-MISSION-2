class basket{
    constructor(x, y, width, height){
        var basket_options={
            isStatic:false
        }
        this.body=Bodies.rectangle(x, y, width, height, basket_options);
        this.width=width
        this.height=height
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}