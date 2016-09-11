window.onload = init;

var map;
var ctxMap;

var pl; //player
var ctxPl; // context

var enemyCvs; //enemy
var ctxEnemy; // context

var stats; //enemy
var ctxStats; // context

var drawBtn;
var clearBtn;

var gameWidth = 800;
var gameHeight = 500;

var background = new Image();
background.src = "background-space-pixel.png";

var background1 = new Image();
background1.src = "background-space-pixel.png";

var tiles = new Image();
tiles.src = "Showcase_sprite_sheet.png";

var player;
var enemies = [];

var isPlaying;
var health;

var mapX = 0;
var mapX1 = gameWidth;

//for creating enemies
var spawnInterval;
var spawnTime = 6000;
var spawnAmount = 3;

var mouseX;
var mouseY;

var mouseControl = false;

var requestAnimFrame = window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;

function init() {
	 map = document.getElementById('map');
	 ctxMap = map.getContext('2d'); 

	 pl = document.getElementById("player");
	 ctxPl = pl.getContext("2d");

 	 enemyCvs = document.getElementById("enemy");
	 ctxEnemy = enemyCvs.getContext("2d");

  	 stats = document.getElementById("stats");
	 ctxStats = stats.getContext("2d");

	 map.width = gameWidth;
	 map.height = gameHeight;
 	 pl.width = gameWidth;
	 pl.height = gameHeight;
  	 enemyCvs.width = gameWidth;
	 enemyCvs.height = gameHeight;
  	 stats.width = gameWidth;
	 stats.height = gameHeight;

	 ctxStats.fillStyle = "#3d3d3d";
	 ctxStats.font = "bold 15pt Arial";

	 drawBtn = document.getElementById('drawBtn');
	 clearBtn = document.getElementById('clearBtn');

	 drawBtn.addEventListener("click", drawRect, false);
	 clearBtn.addEventListener("click", clearRect, false);

	 player = new Player();
	 //enemy = new Enemy();
	 resetHealt();
	 //draw();
	 startLoop();

	 document.addEventListener('mousemove', mouseMove, false);
	 document.addEventListener('click', mouseClick, false);
	 document.addEventListener("keydown", checkKeyDown, false);
	 document.addEventListener("keyup", checkKeyUp, false);
}

function mouseMove(e) {
/*	if (!mouseControl) {
		return;
	}*/
	mouseX = e.pageX - map.offsetLeft;
	mouseY = e.pageY - map.offsetTop;
	player.drawX = mouseX - player.width/2;
	player.drawY = mouseY - player.height/2;
	document.getElementById("gameName").innerHTML = "X: " + mouseX + " Y: " + mouseY;
}

function mouseClick(e) {
	player.drawX = mouseX - player.width/2;
	player.drawY = mouseY - player.height/2;

	document.getElementById("gameName").innerHTML = "Clicked!";

}

function resetHealt() {
	health = 100;
}

function spawnEnemy (count) {
	for (var i = 0; i < count; i++) {
		enemies[i] = new Enemy();
	}
}

function startCreatingEnemies () {
	stopCreatingEnemies();
	spawnInterval = setInterval(function(){spawnEnemy(spawnAmount)}, spawnTime);
}

function stopCreatingEnemies () {
	clearInterval(spawnInterval);
}

function loop() {
	if(isPlaying) {
		draw();
		update();
		requestAnimFrame(loop);
	}
}

function startLoop() {
	isPlaying = true;
	loop();
	startCreatingEnemies();
}

function stopLoop() {
	isPlaying = false;
}

function draw() {
	player.draw();
	//enemy.draw();
	clearCtxEnemy();
	for(var i = 0; i < enemies.length; i++) {
		enemies[i].draw();
	}
}

function update() {
	moveBg();
	drawBg();
	updateStats();
	player.update();
	//enemy.update();
	for (var i = 0; i < enemies.length; i++) {
		enemies[i].update();
	}
}

function moveBg () {
	var vel = 4;
	mapX -= 4;
	mapX1 -= 4;
	if(mapX + gameWidth < 0) { //if cnvs cross left edge 
		mapX = gameWidth - 5; 		//it will move to right edge
	}
	if(mapX1 + gameWidth < 0) {
		mapX1 = gameWidth - 5;
	}
}

//objects
function Player () {
	 this.srcX = 285;
	 this.srcY = 0;
	 this.drawX = 0;
	 this.drawY = 0;
	 this.width = 96;
	 this.height = 96;
	 this.speed = 3;

	 //for keys
	 this.isUp = false;
	 this.isDown - false;
	 this.isRight = false;
	 this.isLeft = false;


	 this.speed = 5;
}

function Enemy () {
	 this.srcX = 97;
	 this.srcY = 0;
	 this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
	 this.drawY = Math.floor(Math.random() * gameHeight);
	 this.width = 96;
	 this.height = 96;

	 this.speed = 8;
}

Enemy.prototype.draw = function() {
	 //
	 ctxEnemy.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, 
							this.drawX, this.drawY, this.width , this.height);	
};

Enemy.prototype.update = function() {
	//this.chooseDir();	
	this.drawX -= 7;
	if(this.drawX + this.width < 0) {
/*		this.drawX = Math.floor(Math.random() * gameWidth) + gameWidth;
		this.drawY = Math.floor(Math.random() * gameHeight);
		random spawn, I've deleted it for greater good
		*/
		this.destroy();
	} 
};

Enemy.prototype.destroy = function() {
	enemies.splice(enemies.indexOf(this), 1); // delete first which out of canvas
};

Player.prototype.draw = function() {
	 clearCtxPlayer();
	 ctxPl.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, 
							this.drawX, this.drawY, this.width , this.height);	
};

Player.prototype.update = function() {
	if(health < 0) {
		resetHealt();
	}

	if(this.drawX < 0) {
		this.drawX = 0;
	}
	if(this.drawX > gameWidth - this.width - 400) {
		this.drawX = gameWidth - this.width - 400;
	}
	if(this.drawY < 0) {
		this.drawY = 0;
	}
	if(this.drawY > gameHeight - this.height) {
		this.drawY = gameHeight - this.height;
	}

	for(var i = 0; i < enemies.length; i++) {
		if(this.drawX >= enemies[i].drawX && 
			this.drawY >= enemies[i].drawY && //1-2 restrict player from left and up
			this.drawX <= enemies[i].drawX + enemies[i].width &&
			this.drawY <= enemies[i].drawY + enemies[i].height)
			// 3-4 restrict player from right and down
		{
			health--;
		}
	}

	this.chooseDir();	
};

Player.prototype.chooseDir = function() {
	if(this.isUp) {
		this.drawY -= this.speed;
	}
	if(this.isDown) {
		this.drawY += this.speed;
	}
	if(this.isRight) {
		this.drawX += this.speed;
	}
	if(this.isLeft) {
		this.drawX -= this.speed;
	}	
};

function checkKeyDown(e) {
	// e - which kay is pressed
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);

	if(keyChar == "W") {
		player.isUp = true;
		e.preventDefault();
	}
	if(keyChar == "S") {
		player.isDown = true;
		e.preventDefault();
	}
	if(keyChar == "D") {
		player.isRight = true;
		e.preventDefault();
	}
	if(keyChar == "A") {
		player.isLeft = true;
		e.preventDefault();
	}
}

function checkKeyUp(e) {
	// e - which kay is pressed
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);

	if(keyChar == "W") {
		player.isUp = false;
		e.preventDefault();
	}
	if(keyChar == "S") {
		player.isDown = false;
		e.preventDefault();
	}
	if(keyChar == "D") {
		player.isRight = false;
		e.preventDefault();
	}
	if(keyChar == "A") {
		player.isLeft = false;
		e.preventDefault();
	}
}

function drawRect() {
	ctxMap.fillStyle = '#3d3d3d';
	ctxMap.fillRect(10, 10, 100, 100); // first two - coordinates,
	// 3 and 4 - size
}

function clearRect() {
	ctxMap.clearRect(0, 0, 800, 500);
}

function clearCtxPlayer () {
	ctxPl.clearRect(0, 0, gameWidth, gameHeight);
}
function clearCtxEnemy () {
	ctxEnemy.clearRect(0, 0, gameWidth, gameHeight);
}

function updateStats() {
	ctxStats.clearRect(0, 0, gameWidth, gameHeight);
	ctxStats.fillText("Health: " + health, 20, 20);
}

function drawBg () {
	ctxMap.clearRect(0, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background, 0, 0, 750, 470, // coord X, Y, image size 3-4
								mapX, 0, gameWidth, gameHeight); //coord cnvs X, Y, cnvs size
	ctxMap.drawImage(background1, 0, 0, 750, 470, 
								mapX1, 0, gameWidth, gameHeight); 
}
