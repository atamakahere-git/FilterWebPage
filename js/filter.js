//add the value of r g and b to current value of r g and b of pixel
function addColor (pixel,r=0,g=0,b=0) {
	pixel.setRed(pixel.getRed()+r);
	pixel.setGreen(pixel.getGreen()+g);
	pixel.setBlue(pixel.getBlue()+b);
}

//function to make greyscale filter
function makeGray() {
	document.getElementById('btns').style.backgroundImage = '' ;
	document.getElementById('btns').style.backgroundColor = 'gray' ; 
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
	document.getElementById('btns').style.backgroundImage = '';
	document.getElementById('btns').style.backgroundColor = 'maroon' ; 
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30);
	}
	showFilter();
}
//function to make a green tone over image
function makeGreen() {
	document.getElementById('btns').style.backgroundImage = '';
	document.getElementById('btns').style.backgroundColor = '#4caf50' ; 
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,30);
	}
	showFilter();
}
//function to make a blue tone over image
function makeBlue() {
	document.getElementById('btns').style.backgroundImage = '' ;
	document.getElementById('btns').style.backgroundColor = 'powderblue' ; 
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,0,30);
	}
	showFilter();
}
//Aqua tone
function makeAqua() {
	document.getElementById('btns').style.backgroundImage = '' ;
	document.getElementById('btns').style.backgroundColor = 'aqua' ; 
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,0,30,30);
	}
	showFilter();
}
function makeYellow() {
	document.getElementById('btns').style.backgroundImage = '' ;
	document.getElementById('btns').style.backgroundColor = 'yellow' ; 
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,30,0);
	}
	showFilter();
}
function makeMagenta() {
	document.getElementById('btns').style.backgroundImage = '' ;
	document.getElementById('btns').style.backgroundColor = 'magenta' ; 
	reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,0,30);
	}
	showFilter();
}
//Reduce the brightness
function makeDull() {
	document.getElementById('btns').style.backgroundImage = '' ;
	document.getElementById('btns').style.backgroundColor = 'darkgray' ; 
		reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,-30,-30,-30);
	}
	showFilter();
}
//Increase the brightness
function makeBright() {
	document.getElementById('btns').style.backgroundImage = '' ;
	document.getElementById('btns').style.backgroundColor = 'white' ; 
		reset();
	for (var pixel of backupImg.values()) {
		addColor(pixel,30,30,30);
	}
	showFilter();
}
// gets to top and bottom color as argument and apply digonal filter
function makediag (color1,color2) {
	document.getElementById('btns').style.backgroundImage = "url(../imgs/rgb.jpg)";
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
