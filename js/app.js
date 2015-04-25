
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$(".close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $('#userGuess').focus(function () {
    if ($(this).val() == $(this).attr("value")) {
        $(this).val("");
    }
}).blur(function () {
    if ($(this).val() === "") {
        $(this).val($(this).attr("value"));
    }
});


//make some initial variables first of all
var rightNumber = Math.floor((Math.random() * 100 +1) );
console.log("The secret number is: " + rightNumber);
var guessCount = 0;
var guesses = [];
guesses.length = 0;
 var distance = null;
 var previousDistance = null;


//create the first function for taking the number in 

function getNumber() {
   $("#guessButton").click(game);
};

//call the function

getNumber();

//now make the guessing function

//greater than -1 because that will mean that it will be in it already
function game() {
	var guess = parseInt($('#userGuess').val());
	if (guess !== null && $.isNumeric(guess) && (guess < 101) && (guess > 0)){
            $('#userGuess').val('');
            guessCount += 1;
            if ($.inArray(guess,guesses) > -1) {
            	$('#error').html('ERROR: You guessed that number already. Please try a new number.');
          } else {
            guesses.push(guess);
            distance = Math.abs(rightNumber - guess);
            previousDistance = Math.abs(rightNumber - guesses[guesses.length - 2]);
            $('#error').html('');
            if (guess === rightNumber) {
                $('#hint').html('Congrats! You got it in ' + guessCount + ' guesses! The secret number was ' + rightNumber + "!");
            } else //is NAN is because in this case there would have been no previous distance.

            {
                if (isNaN(previousDistance)) {
                    if (guess > rightNumber) {
                       $('#hint').html('Guess lower! Last guess: ' + guess);
                    } else if (guess < rightNumber) {
                       $('#hint').html('Guess higher! Last guess: ' + guess);
                    }

                } else if (distance > previousDistance) {
                    $('body').css("background-color", "#3399FF");
                    if (guess > rightNumber) {
                        $('#hint').html('You\'re getting colder, guess LOWER! Last guess: ' + guess);
                    } else if (guess < rightNumber) {
                        $('#hint').html('You\'re getting colder, guess HIGHER! Last guess: ' + guess);
                    }
                } else if (distance < previousDistance) {
                    $('body').css("background-color", "#CC0000");
                    if (guess > rightNumber) {
                        $('#hint').html('You\'re getting hotter, guess LOWER! Last guess: ' + guess);
                    } else if (guess < rightNumber) {
                        $('#hint').html('You\'re getting hotter, guess HIGHER! Last guess: ' + guess);
                    }
                } else if (distance === previousDistance) {
                    if (guess > rightNumber) {
                        $('#hint').html('You\'re on fire, guess LOWER! Last guess: ' + guess);
                    } else if (guess < rightNumber) {
                        $('#hint').html('You\'re on fire, guess HIGHER! Last guess: ' + guess);
                    }
} 
}
}
        } else {
        $('#error').html('ERROR: Your guess must be a number between 1 and 100');
        }


//create a reset function 


$('.new').click(function (e) {
            e.preventDefault();     $('body').css("background-color", "#222");
            rightNumber = Math.floor((Math.random() * 100) + 1);
            guessCount = 0;
             console.log("The secret number is: " + rightNumber);
            guesses.length = 0;
            $('#hint').html('');
            $('#error').html('');
        });




}




});


