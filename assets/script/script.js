
// between 19-120
var randGoal=0;
// between 1-12
var crystal1=0;
var crystal2=0;
var crystal3=0;
var crystal4=0;
var userTotal =0;
var wins=0;
var losses=0;


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

//second crystal
$("#crystal2").attr("value", getRandomOption())

//third crystal
$("#crystal3").attr("value", getRandomOption())

//fourth crystal
$("#crystal4").attr("value", getRandomOption())

//writes wins and losses
$("#wins").html(wins);
$("#losses").html(losses);

$(document).ready(function(){
	$(".jumbotron").fadeIn(2500)
	$('.container').fadeIn(3000);
	$(".crystals").fadeIn(3100);
})


// Event listener, takes value from images and adds it to counter
$(".minerals").on("click", function () {
	console.log("a crystal has been clicked!")
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
		wins ++
		$("#wins").html(wins);
		userTotal = 0;
		$("#score").html(userTotal);
	}
	else if(userTotal > randGoal){
		resetValues();
		alert("Try again!")
		randGoal = (getRandomGoal(19, 120));
		$("#random-number").html(randGoal);
		losses ++
		$("#losses").html(losses)
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




