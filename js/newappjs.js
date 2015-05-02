$(document).ready(function(){
/*--- Display information modal box ---*/
$(".what").click(function(){
$(".overlay").fadeIn(1000);
});
/*--- Hide information modal box ---*/
$(".close").click(function(){
$(".overlay").fadeOut(1000);
});
//make some initial variables
var rightNumber= Math.floor((Math.random() * 100 +1));
var guesses=[];
console.log("The secret number is "+ rightNumber);

//the new game function 
$('.new').click(function (event) {
event.preventDefault();
var rightNumber= Math.floor((Math.random() * 100 +1));
guesses.length = 0;
$('#count').html(guesses.length);
console.log("The secret number is "+ rightNumber);
$('ul#guessList').html('');
$('#feedback').html('Make your Guess!')
});

//the guess button function 
$("#guessButton").click(function(event){
	event.preventDefault();
var userGuess = parseInt($('#userGuess').val());

if (userGuess !== null && $.isNumeric(userGuess) && (userGuess<101) && (userGuess > 0)) {

//beginning of the if statements
if (rightNumber==userGuess) {guesses.push(userGuess);
$('#feedback').html('YOU GOT IT!! It was in ' + (guesses.length) + ' guesses. Last guess: ' + userGuess); $('#count').html(guesses.length); $("ul#guessList").append("<li>" + userGuess + "</li>");
}
//way cold
else if (rightNumber - userGuess < 100 && rightNumber - userGuess > 40  || userGuess - rightNumber < 100 && userGuess - rightNumber > 40 ) {guesses.push(userGuess); $('#feedback').html('WAY COLD!!!! Last guess:'  + userGuess); $('#count').html(guesses.length); $("ul#guessList").append("<li>" + userGuess + "</li>");
}
//cold
else if (rightNumber - userGuess <= 40 && rightNumber - userGuess > 20  || userGuess - rightNumber <= 40 && userGuess - rightNumber > 20 ) {guesses.push(userGuess); $('#feedback').html('COLD!!!! Last guess:'  + userGuess); $('#count').html(guesses.length); $("ul#guessList").append("<li>" + userGuess + "</li>");
}
//warm
else if (rightNumber - userGuess <= 20 && rightNumber - userGuess > 10  || userGuess - rightNumber <= 20 && userGuess - rightNumber > 10 ) {guesses.push(userGuess); $('#feedback').html('WARM!!!! Last guess:'  + userGuess); $('#count').html(guesses.length); $("ul#guessList").append("<li>" + userGuess + "</li>");
}
//hot
else if (rightNumber - userGuess <= 10 && rightNumber - userGuess > 0  || userGuess - rightNumber <= 10 && userGuess - rightNumber > 0 ) {guesses.push(userGuess); $('#feedback').html('HOT!!!! Last guess:'  + userGuess); $('#count').html(guesses.length); $("ul#guessList").append("<li>" + userGuess + "</li>");
}
}
//not a number

//not in right values
else  {$('#feedback').html('ERROR! PICK A NUMBER BETWEEN 1 and 100!!!');}
$('input#userGuess').val("");
})
});




