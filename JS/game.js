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
    if (Ob.x == snake.head.x && Ob.y == snake.head.y) {
        snake.isDead = true;
    }

}

function newGame() {
    snake = new Snake();
    food = new Food();
    Ob = new obstacle();
    document.getElementById("sc").innerHTML = "Score: 0";
    sc = 0;
}

function eatFood() {
    snake.length++;
    if(snake.length > 0){
        f = createFood();
        food.newFood(f.x,f.y);
    }
    else food.newFood1();
    a = createObstacle();
    Ob.newObstacle(a.x, a.y);;
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
function randomObstacle() {
    a = createVector(0, 0);
    let x = Math.floor(random(width));
    let y = Math.floor(random(height));

    x = Math.floor(x / GRID_SIZE) * GRID_SIZE;
    y = Math.floor(y / GRID_SIZE) * GRID_SIZE;

    a.x = x;
    a.y = y;
    return a;
}

function checkPositionObstacle(a) {
    for (let vector of snake.body) {
        if (a.x == vector.x && a.y == vector.y) {
            return false;
        }
    }
    return true;
}

function checkFood(a) {
    if (a.x == Ob.x && a.y == Ob.y) return false;
    for (let vector of snake.body) {
        if (a.x == vector.x && a.y == vector.y) {
            return false;
        }
    }
    return true;
}

function createFood() {
    let a = randomObstacle();
    while (!checkFood(a)) {
        a.x += GRID_SIZE;
    }
    return a;
}

function createObstacle() {
    let a = randomObstacle();
    while (!checkPositionObstacle(a)) {
        a.x += GRID_SIZE;
    }
    return a;
}