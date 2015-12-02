$(document).ready(function() {
    //produce a random number
	var answer = (Math.floor(Math.random() * 100) + 1);
	//counter for guesses
	var i = 0;
    //check number from user input
	$("#enter").click(function() {
    var guess=$("#field").val();
    var diff = Math.abs(guess-answer);
    //if text box is empty or letters or symbols are used  
    if (isNaN(guess)) {
        $("#display").text("Please enter a number between 1 and 100.");
        
    } 
    //if number is or below 0 or over 100
    else if (guess<1 || guess>100) {
        $("#display").text("It's between 1 and 100.");
        
    } 
    //if user guess the number correctly disables "enter" and "get answer" buttons
    else if (diff == 0) {
        $('#count').text(++i); 
        $('#final').text("Total Guesses:"); 
        $("#enter").prop('disabled', true); 
        $("#getAnswer").prop('disabled', true); 
        $("#display").text("YOU GOT IT! THAT IS THE NUMBER CONGRATS!");
    }
    
    /* used for testing
    else if (diff<1 || diff>100) {
        $('#count').text(++i); 
        $("#display").text("It's anywhere from 1 to 100.");
        
    }
    */
    
    //all ranges of guesses and hints
    else if (diff < 2) 	{
        $('#count').text(++i); 
        $("#display").text("Burning up!");
        
    }
    else if (diff < 10) {
        $('#count').text(++i); 
        $("#display").text("Hot!");
        
    }
    else if (diff < 15) {
        $('#count').text(++i); 
        $("#display").text("Warm.");
        
    }
    else if (diff < 20) {
        $('#count').text(++i); 
        $("#display").text("Almost Warm.");
        
    }
    else if (diff < 30) {
        $('#count').text(++i); 
        $("#display").text("Mild.");
    
    }
    else if (diff < 40) {
        $('#count').text(++i); 
        $("#display").text("Chilly.");
        
    }
    else if (diff < 50) {
        $('#count').text(++i); 
        $("#display").text("Brrrr.");
        
    }
    else if (diff < 60) {
        $('#count').text(++i); 
        $("#display").text("It's freezing here.");
        
    }
    else if (diff < 70) {
        $('#count').text(++i); 
        $("#display").text("North pole cold.");
        
    }
    else if (diff < 80) {
        $('#count').text(++i); 
        $("#display").text("The polar bears are enjoying this weather.");
        
    }
    else if (diff < 90) {
        $('#count').text(++i); 
        $("#display").text("Zero degrees.");
        
    }
    else if (diff < 100) {
        $('#count').text(++i); 
        $("#display").text("Below Zero degrees.");
        
    }


});

  //restarts game enables "enter" and "get answer" buttons
  $("#restart").click(function(){
  $("#enter").prop('disabled', false); 
  $("#getAnswer").prop('disabled', false);
  $('#field').val('');
  location.reload();
  });
  //show correct answer
  $("#getAnswer").click(function(){
      $("#count").text("THE ANSWER IS " + answer);
  });
  //call for answer
  $("#answer").text(answer);
});