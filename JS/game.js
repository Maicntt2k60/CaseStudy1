let snake;
let food;
let sc = 0;
let obstacle;
localStorage.setItem('best', '0');

class Game {
    constructor() { }

    eatFood() {
        if (snake.head.x == food.x && snake.head.y == food.y) {
            sc++;
            document.getElementById("sc").innerHTML = "Score: " + sc;
            if (sc > parseInt(localStorage.getItem('best'))) {
                localStorage.setItem('best', sc.toString());
                document.getElementById("bestScore").innerHTML = 'Best Score: ' + sc.toString();
            }
            snake.length++;
            let a = this.createFood();
            food.setX(a.x);
            food.setY(a.y);
            //
            a = this.createObstacle();
            obstacle.setX(a.x);
            obstacle.setY(a.y);
        }
    }

    drawSnake() {
        // update every SNAKE_SPEED frame
        if (frameCount % SNAKE_SPEED == 0) {
            snake.updateMove();
        }

        if (obstacle.x == snake.head.x && obstacle.y == snake.head.y) {
            snake.isDead = true;
        }

        food.showFood();
        obstacle.showObstacle();
        snake.show();
    }

    //hàm new game tạo ra ván mới
    newGame() {
        snake = new Snake();
        food = new Food();
        obstacle = new Obstacle();
        document.getElementById("sc").innerHTML = "Score: 0";
        if (sc > parseInt(localStorage.getItem('best'))) {
            localStorage.setItem('best', sc.toString());
            document.getElementById("bestScore").innerHTML = 'Best Score: ' + sc.toString();
        }
        sc = 0;
    }

    // kew down
    keyPressed() {
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

    randomObstacle() {
        let a = createVector(0, 0);
        let x = Math.floor(random(width));
        let y = Math.floor(random(height));

        x = Math.floor(x / GRID_SIZE) * GRID_SIZE;
        y = Math.floor(y / GRID_SIZE) * GRID_SIZE;

        a.x = x;
        a.y = y;

        return a;
    }

    checkPositionObstacle(a) {

        if (a.x == snake.head.x && a.y == snake.head.y) return false;

        for (let vector of snake.body) {
            if (a.x == vector.x && a.y == vector.y) {
                return false;
            }
        }

        return true;
    }

    checkFood(a) {

        if (a.x == obstacle.x && a.y == obstacle.y) return false;
        if (a.x == snake.head.x && a.y == snake.head.y) return false;

        for (let vector of snake.body) {
            if (a.x == vector.x && a.y == vector.y) {
                return false;
            }
        }
        return true;
    }

    createFood() {
        let a = this.randomObstacle();
        while (!this.checkFood(a)) {
            a.y += GRID_SIZE;
        }
        return a;
    }

    createObstacle() {
        let a = this.randomObstacle();
        while (!this.checkPositionObstacle(a)) {
            a.x += GRID_SIZE;
        }
        return a;
    }
    check() {
        snake.checkDead();
        return snake.isDead;
    }

    start() {
        if (this.check()) {
            alert("game over");
            this.newGame();
        }
        this.drawSnake();
        this.keyPressed();
        this.eatFood();
        this.check();
    }
}

let g = new Game();

function start() {
    g.newGame();
}

function setup() {
    createCanvas(WITDH, HEIGHT);
    g.newGame();

}

function draw() {
    background(0);
    g.start();
}