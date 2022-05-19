class Food{
    constructor(){
        this.newFood();
        this.newFood1();
    }

    newFood(x,y){
        this.x = x;
        this.y = y;
    }

    newFood1(){
        this.x = Math.floor(random(width));
        this.y = Math.floor(random(height));

        this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
        this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
    }
    
    showFood(){
        //draw food
        fill(227, 243, 3);
        rect(this.x, this.y,GRID_SIZE,GRID_SIZE);
    }
}