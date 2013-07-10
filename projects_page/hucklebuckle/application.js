//Pick random number
var randomNumber = Math.floor(Math.random()*101)
var counter = 0;

window.onload = function() {
	var submit = document.getElementById("submit");
	var guess = document.getElementById("guess").value;
	var reset = document.getElementById("reset");
	var lastGuess = 0;

//Set outcomes for user input
	function warmer() {
	document.getElementById("fire_lit").style.display = "none";
	document.getElementById("fire_cold").style.display = "none";
	document.getElementById("fire_start").style.display = "none";
	document.getElementById("fire_warm").style.display = "inline";
	document.getElementById("cold-blue").style.display = "none";
	document.getElementById("cold-gray").style.display = "inline";
	document.getElementById("hot-gray").style.display = "none";
	document.getElementById("hot-red").style.display = "inline-block";
	document.getElementById("hint_container").innerHTML = "Getting warmer...";
	document.getElementById("current_guess").innerHTML = guess;
	}
	function colder() {
	document.getElementById("fire_lit").style.display = "none";
	document.getElementById("fire_cold").style.display = "inline";
	document.getElementById("fire_start").style.display = "none";
	document.getElementById("fire_warm").style.display = "none";
	document.getElementById("hot-red").style.display = "none";
	document.getElementById("hot-gray").style.display = "inline";
	document.getElementById("cold-gray").style.display = "none";
	document.getElementById("cold-blue").style.display = "inline-block";
	document.getElementById("hint_container").innerHTML = "Oh no! Getting colder...";
	document.getElementById("current_guess").innerHTML = guess;
	}
	function win() {
	document.getElementById("fire_lit").style.display = "inline";
	document.getElementById("fire_cold").style.display = "none";
	document.getElementById("fire_start").style.display = "none";
	document.getElementById("fire_warm").style.display = "none";
	document.getElementById("hot-red").style.display = "inline-block";
	document.getElementById("hot-gray").style.display = "none";
	document.getElementById("cold-blue").style.display = "inline-block";
	document.getElementById("cold-gray").style.display = "none";
	document.getElementById("hint_container").innerHTML = "Congratulations!  You guessed my number!";
	document.getElementById("current_guess").innerHTML = guess;
	}
//Check user input
	submit.onclick = function(){
		guess = document.getElementById("guess").value;
		if (guess == randomNumber) {
		win();
		}
		else if (guess > 100 || guess < 1) {
		document.getElementById("hint_container").innerHTML = "That guess was not a number between 1 and 100!";
		document.getElementById("current_guess").innerHTML = guess;
		}
		else if (guess == lastGuess || guess == null) {
		document.getElementById("hint_container").innerHTML = "Be sure to enter a new guess!";
		document.getElementById("current_guess").innerHTML = guess;
		}
		else if (Math.abs(guess - randomNumber) < (Math.abs(lastGuess - randomNumber))) {
		warmer();
		document.getElementById("fire_warm").style.display = "inline";
		}
		else if (Math.abs(guess - randomNumber) > (Math.abs(lastGuess - randomNumber))) {
		colder();
		document.getElementById("fire_cold").style.display = "inline";
		}
		counter = counter +1;
		document.getElementById("counter").innerHTML = counter;
		lastGuess = guess;
		document.getElementById("guess").value = null;
	}
//Add key enter
	document.getElementById("guess").onkeypress= function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			submit.click();
		}
	}
//User reset
	reset.onclick = function(){
	location.reload();
	}
}
