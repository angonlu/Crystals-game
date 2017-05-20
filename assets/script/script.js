
// between 19-120
var randGoal = 0;
// wins and losses - have to change every round

// random value of crystals. Number has to be random
// between 1-12
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
/*sum of the user guesses - if equal to randGoal, start
increase wincount generate random(call random function)
for every crystal
*/
var userTotal = 0;
var wins = 0;
var losses = 0;

// get random value which is the goal and assigns it to a div
function getRandomGoal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
randGoal = (getRandomGoal(19, 120));
$("#random-number").html(randGoal);
// get random number and assigns it to first crystal

function getRandomOption() {
	return Math.floor(Math.random() * (12 - 1)) + 1;
}
$("#crystal1").attr("value", getRandomOption())

// gets random number and assigns it to second crystal

$("#crystal2").attr("value", getRandomOption())

// gets random number and assigns it to third crystal

$("#crystal3").attr("value", getRandomOption())

// gets random number and assigns it to fourth crystal

$("#crystal4").attr("value", getRandomOption()) 


$(".crystals").on("click", function () {
	var crystalValue = ($(this).attr("value"));

	crystalValue = parseInt(crystalValue);
	console.log(crystalValue);

	userTotal += crystalValue

	$("#score").html(userTotal);

	if (userTotal === randGoal){
		resetValues();
		alert("You win this round!");
		randGoal = (getRandomGoal(19, 120));
		$("#random-number").html(randGoal);
		$("#wins").html(wins ++);
		userTotal = 0;
		$("#score").html(userTotal);
	}
	else if(userTotal > randGoal){
		resetValues();
		alert("Try again!")
		randGoal = (getRandomGoal(19, 120));
		$("#random-number").html(randGoal);
		$("#losses").html(losses ++);
		userTotal = 0;
		$("#score").html(userTotal);

	}
})
function resetValues() {
	$("#crystal1").attr("value", getRandomOption())
	$("#crystal2").attr("value", getRandomOption())
	$("#crystal3").attr("value", getRandomOption())
	$("#crystal4").attr("value", getRandomOption()) 
}







