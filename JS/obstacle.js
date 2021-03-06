class Obstacle
{
    constructor(){
       this.newObstacle();
    }

    newObstacle(){
        this.x = Math.floor(random(width));
        this.y = Math.floor(random(height));

        this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
        this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
    }

    setX(x){
        this.x = x;
    }
    
    setY(y){
        this.y = y;
    }
    showObstacle(){
        //draw obstacle
        fill(255,40,0);
        rect(this.x, this.y,GRID_SIZE,GRID_SIZE);
    }
}