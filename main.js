var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;

const backgroundImage = 'mars.jpg';
const roverImage = 'rover.png';

var roverX = 10;
var roverY = 10;

var backgroundImgTag, roverImgTag;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.src = backgroundImage;
    backgroundImgTag.onload = uploadBackground();

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover();
}