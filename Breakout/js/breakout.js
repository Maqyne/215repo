// Kyle Malinosky
// n220-27786
// 04.29.19

let rects = [];
let myPaddle;
let pingPong;
let txtScore = 0;
let lives = 3;

function setup() {
    createCanvas(800, 900);



    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {

            // generate random color for the blocks
            let randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

            let newRect = new Rectangle();
            newRect.x = (i * 100) + 1.5;
            newRect.y = (j * 25) + 100;
            newRect.color = randomColor;
            rects.push(newRect);
        }
    }
    myPaddle = new Paddle();
    myPaddle.x = 350;
    myPaddle.y = 700;

    pingPong = new Pong();
    pingPong.x = 150;
    pingPong.y = 250;
    pingPong.velocityX = Math.random() * 7 + 3;
    pingPong.velocityY = Math.random() * 7 + 3;
}

function draw() {
    background(175);

    // create score at top
    text("Lives Remaining: " + lives + " Score: " + txtScore, 350, 50);

    pingPong.x += pingPong.velocityX;
    pingPong.y += pingPong.velocityY;

    // hit detection for ball against paddle    
    let hitPaddle = collideRectCircle(myPaddle.x, 700, 100, 10, pingPong.x, pingPong.y, 15);
    // if ball hits paddle redirect ball
    if (hitPaddle) {
        pingPong.y = 692;
        pingPong.velocityY *= -1;
    }

    // hit detection for ball against top, left, and right walls
    // if ball hits top, left, and right redirect ball
    if (pingPong.x < 7.5) {
        pingPong.velocityX *= -1;
    }
    if (pingPong.x > 792.5) {
        pingPong.velocityX *= -1;
    }
    if (pingPong.y < 7.5) {
        pingPong.velocityY *= -1;
    }
    if (lives == 0) {
        text("GAME OVER", 350, 450);
        text("Refresh to try again...", 335, 500);
    }

    // detection for if ball leaves bottom boundery
    // if ball leaves bottom boundery reset ball
    // if ball has left boundery three times "game over"
    if (pingPong.y > 910 && lives >= 1) {

        if (lives > 1) {

            pingPong.x = 150;
            pingPong.y = 250;
            // pingPong.velocityX = 3;
            // pingPong.velocityY = 3;
        }
        lives -= 1;
    }

    for (let i = rects.length - 1; i >= 0; i--) {
        let r = rects[i];
        // hit detection for ball against blocks
        let hitBlocks = collideRectCircle(r.x, r.y, r.width, r.height, pingPong.x, pingPong.y, 15);
        if (hitBlocks) {
            //if ball hits block remove block 
            rects.splice(i, 1);
            //when block is removed add points to score 
            txtScore += 1;
            // detection of where it's hit to reverse direction
            if (pingPong.x < r.x + r.width && pingPong.x > r.x) {
                pingPong.velocityY *= -1;
            } else {
                pingPong.velocityX *= -1;
            }
        } else {
            r.draw();
        }
    }

    // if all blocks are gone "Winner!"
    if (txtScore % 32 == 0 && txtScore !== 0) {
        text("WINNER!", 350, 450);
        text("Refresh to try again...", 335, 500);
        pingPong.velocityX = 0;
        pingPong.velocityY = 0;
    }

    myPaddle.draw();
    paddleMove();

    pingPong.draw();
}

// create Object for blocks
function Rectangle() {
    this.x = 0;
    this.y = 0;
    this.width = 95;
    this.height = 20;
    this.color = 0;

    this.draw = function () {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}

// create Object for paddle
function Paddle() {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 10;

    this.draw = function () {
        fill('#96D696');
        rect(this.x, this.y, this.width, this.height);
    }
}

// allow the paddle to track the users mouse
function paddleMove() {
    if (mouseX <= 0) {
        myPaddle.x = 0;
    } else if (mouseX >= 700) {
        myPaddle.x = 700;
    } else {
        myPaddle.x = mouseX;
    }
}

// create Object for ball
function Pong() {
    this.x = 0;
    this.y = 0;
    this.velocityX = 0;
    this.velocityY = 0;


    this.draw = function () {
        fill(255);
        circle(this.x, this.y, 7.5);
    }
}