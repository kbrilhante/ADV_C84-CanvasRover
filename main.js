const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;

const backgroundImage = "mars.jpg";
const roverImage = "rover.png";

const roverX = 10;
const roverY = 10;

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
    const keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == 38) {
        up();
        console.log('cima');
    }
}