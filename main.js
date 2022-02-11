//Create a reference for canvas 
var canvas =document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Give specific height and width to the car image
var greencar_height = 100;
var greencar_width = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;
function add() {
	background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;

    greencar_img = new Image();
    greencar_img.onload = uploadgreencar;
    greencar_img.src = greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_img, 0 , 0 , canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_img, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y >= 0){
		greencar_y = greencar_y - 10;
		console.log("When up is pressed, x =" + greencar_x + " | y =" + greencar_y)
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{if (greencar_y <= 550){
	greencar_y = greencar_y + 10;
	console.log("When down is pressed, x =" + greencar_x + " | y =" + greencar_y)
	uploadBackground();
	uploadgreencar();
}
	//Define function to move the car downward
}

function left()
{ if (greencar_x >= 0){
	greencar_x = greencar_x - 10;
	console.log("When up is pressed, x =" + greencar_x + " | y =" + greencar_y)
	uploadBackground();
	uploadgreencar();
}
	//Define function to move the car left side
}

function right()
{if (greencar_x <= 750){
	greencar_x = greencar_x + 10;
	console.log("When up is pressed, x =" + greencar_x + " | y =" + greencar_y)
	uploadBackground();
	uploadgreencar();
}
	//Define function to move the car right side
}
