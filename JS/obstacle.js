class obstacle{
    constructor(){
       this.newObstacle();
    }
    newObstacle(x,y){
        this.x = x;
        this.y = y;

        // this.x = Math.floor(random(width));
        // this.y = Math.floor(random(height));

        // this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
        // this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
    }
    showObstacle(){
        //draw obstacle
        fill(255,40,0);
        rect(this.x, this.y,GRID_SIZE,GRID_SIZE);
    }
}