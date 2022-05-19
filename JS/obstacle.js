class obstacle
{

    constructor(){
       this.newObstacle();
    }

    newObstacle(x,y){
        this.x = x;
        this.y = y;
    }

    showObstacle(){
        //draw obstacle
        fill(255,40,0);
        rect(this.x, this.y,GRID_SIZE,GRID_SIZE);
    }
}