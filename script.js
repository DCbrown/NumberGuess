$(document).ready(function() {

	var answer = (Math.floor(Math.random() * 100) + 1);

	$("#enter").click(function() {
    var guess=$("#field").val();
    var diff = Math.abs(guess-answer);

    if (isNaN(guess)) {$("#display p").text("Please enter a number between 1 and 100.");} 
    else if (guess<1 || guess>100) {$("#display p").text("It's between 1 and 100.");} 
    
    else if (diff == 0) {$("#display p").text("YOU GOT IT! THAT IS THE NUMBER CONGRATS!");}
    else if (diff<1 || diff>100) {$("#display p").text("It's anywhere from 1 to 100.");}
    else if (diff < 2) 	{$("#display p").text("Burning up!");}
    else if (diff < 10) {$("#display p").text("Hot!");}
    else if (diff < 15) {$("#display p").text("Warm.");}
    else if (diff < 20) {$("#display p").text("Almost Warm.");}
    else if (diff < 30) {$("#display p").text("Mild.");}
    else if (diff < 40) {$("#display p").text("Chilly.");}
    else if (diff < 50) {$("#display p").text("Brrrr.");}
    else if (diff < 60) {$("#display p").text("It's freezing here.");}
    else if (diff < 70) {$("#display p").text("North pole cold.");}
    else if (diff < 80) {$("#display p").text("The polar bears are enjoying this weather.");}
    else if (diff < 90) {$("#display p").text("Zero degrees.");}
    else if (diff < 100) {$("#display p").text("Below Zero degrees.");}


	});


  $("#restart").click(function(){
  	location.reload();
  });

  $("#answer p").text(answer);
});