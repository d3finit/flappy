
//Initalize
var PLAYER_SIZE = 20;
var CANVAS = document.getElementById("myCanvas");
var SCORE_TEXT = document.getElementById("score");
var CTX = CANVAS.getContext("2d");		//KNOWN BUG
var GROUND_LEVEL = CANVAS.height - 50;
var SCORE = 0;
var OBSTICILES;
var SCROLL_SPEED;
var PLAYER;
var GameOVER;


//Game Functions
//Initlaizer function
function setUpNewGame() {
	SCORE = 0; //make the score 0
	PLAYER = {
		x: CANVAS.width / 4, //Set the player x corrodnate to the canvas width 	divided by 4
		y: GROUND_LEVEL - PLAYER_SIZE, //Set the player y corrodnate of the	ground minus the size of the player so that the player is not in the 	ground
		y_velocity: 0 //Set the up and down speed to 0
	};
}

//make a function to update the frame
function frameUpdate() {
	drawGame();
}

//make a function to draw the game
function drawGame() {
	drawBackground();
	drawPlayer();

	//check if the game is over an if so display a gamover message
	if (GameOVER) {
		CTX.font = "30px Arial";
		CTX.fillText("Press space to begin", 50, 50);
	}

}

function drawBackground() {
	//sky
	CTX.beginPath();
	CTX.rect(0, 0, CANVAS.width, CANVAS.height);
	CTX.fillStyle = "blue";
	CTX.fill();

	//ground
	CTX.beginPath();
	CTX.rect(0, GROUND_LEVEL, CANVAS.width, CANVAS.height - GROUND_LEVEL);
	CTX.fillStyle = "green";
	CTX.fill();

}


function drawPlayer() {
	CTX.beginPath();
	CTX.rect(PLAYER.x, PLAYER.y, PLAYER_SIZE, PLAYER_SIZE);
	CTX.fillStyle = "orange";
	CTX.fill();
}


//Run the game

//start a new game
setUpNewGame();

//set the interval to update the frame
setInterval(frameUpdate, 10);

