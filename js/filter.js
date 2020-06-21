//add the value of r g and b to current value of r g and b of pixel
function addColor (pixel,r=0,g=0,b=0) {
	pixel.setRed(pixel.getRed()+r);
	pixel.setGreen(pixel.getGreen()+g);
	pixel.setBlue(pixel.getBlue()+b);
}

//function to make greyscale filter
function makeGray() {
	reset();
	for (var pixel of backupImg.values()) {
		var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	showFilter();
}
//function to make a red tone over image
function makeRed() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30);
	}
	showFilter();
}
//function to make a green tone over image
function makeGreen() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,30);
	}
	showFilter();
}
//function to make a blue tone over image
function makeBlue() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,0,30);
	}
	showFilter();
}
//Aqua tone
function makeAqua() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,30,30);
	}
	showFilter();
}
function makeYellow() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,30,0);
	}
	showFilter();
}
function makeMagenta() {
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,0,30);
	}
	showFilter();
}
//Reduce the brightness
function makeDull() {
		reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,-30,-30,-30);
	}
	showFilter();
}
//Increase the brightness
function makeBright() {
		reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,30,30);
	}
	showFilter();
}
//Name is enought to tell you the function
function makediag (color1,color2) {
	reset();
	for (var pixel of backupImg.values()) {
		if (diagonalLeft(backupImg,pixel)) {
			applyColor(color1,pixel);
		}
		else {
			applyColor(color2,pixel);
		}
	}
	showFilter();
}

// Filter must be added here.
