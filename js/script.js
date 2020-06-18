var originalImage = null; //for save keeping the original
var backupImg = null; //for apllying filter

// function to capture uplaod and save it to global var originalImage and show image to canvas
function upload(){
	var fileinput = document.getElementById("finput");
	originalImage = new SimpleImage(fileinput);
	backupImg = new SimpleImage(fileinput);
	showOriginal();
}
// reset the backup image to orifinal image
function reset() {
	for (var pix of originalImage.values()) {
		var x = pix.getX();
		var y = pix.getY();
		backupImg.setPixel(x,y,pix);
	}
}
//print original image on canvas
function showOriginal() {
	var canvas = document.getElementById("canvas")
	originalImage.drawTo(canvas)
}
// show filtered image on canvas
function showFilter() {
	var canvas = document.getElementById("canvas")
	backupImg.drawTo(canvas)
}
//Function to copy the content of backupImg to originalImage
function makeChange() {
	for (var pix of backupImg.values()) {
	var x = pix.getX();
	var y = pix.getY();
	originalImage.setPixel(x,y,pix);
	}
}
//Download the image from canvas
function download(){
  var link = document.createElement('a');
  link.download = 'filterpaper.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
}

//finding the right diagonal
function diagonalRight (image,pixel) {
	if (pixel.getX()/pixel.getY() < image.getWidth()/image.getHeight()) {
		return true;
	}
	else {
		return false;
	}
}
//finding the left diagonal
function diagonalLeft(image,pixel) {
	if (diagonalRight(image,pixel)) {
		return false;
	}
	else {
		return true;
	}
}
