//The material in class was used as the guide to make the picture change colour when an element is hovered over

//this function changes the profile picture to black and white
function BlackAndWhitePic() {
	document.getElementById("profilePicture").src =
		"image/mark-black-and-white.png";
}

//this function changes the profile picture back to normal
function NormalPic() {
	document.getElementById("profilePicture").src = "image/mark.png";
}

function FormSubmit() {
	alert("Thank you for submitting"); //informs the user that the form has been submitted
}

function clock() { //function with a real time clock
	let today = new Date();
	let seconds = today.getSeconds(); //gets seconds
	let minutes = today.getMinutes(); //gets minutes
	let hours = today.getHours(); //gets hours
	seconds = timeCheck(seconds);
	minutes = timeCheck(minutes);
	document.getElementById('clock').innerHTML =
		hours + " : " + minutes + " : " + seconds; //displays hours minutes and seconds of the clock, separated by semicolons and spaces
	let t = setTimeout(clock, 500);
}

function timeCheck(i) {
	if (i < 10) {
		i = "0" + i
	};
	return i; // if number is less than 10 adds a 0 in front of it
}