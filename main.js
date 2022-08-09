const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;

const borderRight = canvas.width - roverWidth;
const borderBottom = canvas.height - roverHeight;

const backgroundImage = "mars.jpg";
const roverImage = "rover.png";

var roverX = 10;
var roverY = 10;

var backgroundImgTag, roverImgTag;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.src = backgroundImage;
    backgroundImgTag.onload = uploadBackground;
    
    roverImgTag = new Image();
    roverImgTag.src = roverImage;
    roverImgTag.onload = uploadRover;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", keyDown);

function keyDown (e) {
    const passo = 10;
    const keyPressed = e.keyCode;
    console.log(e.key + " -> " + keyPressed);
    if(keyPressed == 37) {
        // esquerda
        if (roverX > 0) {
            roverMove(-passo, 0);
        }
    } else if (keyPressed == 38) {
        // cima
        if (roverY > 0) {
            roverMove(0, -passo);
        }
    } else if (keyPressed == 39) {
        // direita
        if (roverX <= borderRight) {
            roverMove(passo, 0);
        }
    } else if (keyPressed == 40) {
        // baixo
        if (roverY <= borderBottom) {
            roverMove(0, passo);
        }
    }
}

function roverMove (x, y) {
    roverX += x;
    roverY += y;

    uploadBackground();
    uploadRover();
}