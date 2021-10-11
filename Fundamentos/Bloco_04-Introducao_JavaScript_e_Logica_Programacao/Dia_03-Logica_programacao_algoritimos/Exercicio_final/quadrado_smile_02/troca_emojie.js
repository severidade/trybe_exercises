var i = 0; 			// Start Point
var images = ['🙈', '🙊', '🙉' ];	// Images Array
var time = 50;	// Time Between Switch


document.title = images[i] + ' Severo';

// Change Image
function changeImg(){
	// document.slide.src = images[i];
  document.title = images[i] + ' Severo';

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

// adaptado de https://www.youtube.com/watch?v=4YQ4svkETS0&t=214s
