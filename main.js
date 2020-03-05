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

function HideLoader() {}
