let snake;
let food;
let Ob;
let sc = 0;
function setup() {
    createCanvas(WITDH, HEIGHT);
    newGame();
}

function draw() {
    background(0);
    if (!snake.isDead) {
        drawSnake();
    } else {
        alert("GameOver!");
        newGame();
    }
}

function drawSnake() {
    // update every SNAKE_SPEED frame
    if (frameCount % SNAKE_SPEED == 0) {
        snake.update();
    }

    food.showFood();
    snake.show();
    Ob.showObstacle();
    //
    if (snake.head.x == food.x && snake.head.y == food.y) {
        sc++;
        document.getElementById("sc").innerHTML = "Score: " + sc;
        eatFood();
    }
    //
    if(Ob.x == snake.head.x && Ob.y == snake.head.y){
        snake.isDead = true;
    }

}

function newGame() {
    snake = new Snake();
    food = new Food();
    Ob = new obstacle();
}

function eatFood() {
    snake.length++;
    
    food.newFood();
    Ob.newObstacle();
}

function keyPressed() {
    if (keyCode == UP_ARROW && snake.vel.y != 1) {
        snake.vel.y = -1;
        snake.vel.x = 0;
    } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
        snake.vel.y = 1;
        snake.vel.x = 0;
    } else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
        snake.vel.y = 0;
        snake.vel.x = -1;
    } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
        snake.vel.y = 0;
        snake.vel.x = 1;
    }
}