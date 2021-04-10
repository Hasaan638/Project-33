class Snow{
    constructor(x,y){
        var options = {
            restitution:0.8
            friction:1.0
            density:1.0
        }
        super(x,y,width,height);
        this.image=loadImage("sprites/snow4.webp");
    }
}