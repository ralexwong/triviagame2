// create variables for answer count
var correct = 0;
var timer = 30;




// array to hold questions

var triviaQuestions = {
    "Who played Noah in the movie 'The Notebook'?":
    "Which 2005 film's tagline is 'Better Late Than Never'?",
    "In what U.S. city does the action take place in 'The Departed'?",
    "In 'The Godfather', what does film producer Jack Woltz discover in his bed?",
    "Which film ended with real people and their movie counterparts placing rocks on a grave?",
    "An alien attack destroyed the White House in what 1996 summer blockbuster?",
    "Which film opened on a man strutting down the street, paint can in hand, to a song by the Bee Gees?",
    "The opening scene of 'Saving Private Ryan' was a re-enactment of what World War II battle?",
    "In 'The Incredibles', what did Bob Parr do to get fired from his job?"
}


// hides quiz before the game starts
$(document).ready(function(){
    $("#content").hide();
    $("#results").hide();
});


// shows the quiz, hides the start page, and starts the timer
$(document).ready(function(){
    $(".start").on("click", function() {
        $(".start").hide();
        $("#content").show();


        // have a timer that starts at 31 seconds and goes down 1 second
        // when the start button is hit
        // when timer reaches 0 hide the quiz
        // show results

        // exucutes the decrement function every 1 second
        // var interval = setInterval(decrement, 1000);

        // function decrement () {
        //     timer--;
        //     $("#timerNumber").html(timer);

        //     if (timer == 0) {
        //         clearInterval(interval)
        //         results();
        //     }
        // }

        // $(".done").on("click", function() {
        //     clearInterval(interval);
        //     results();
        // });

        
    });
});






// takes input of radio checkboxes
// change id of all right answer checkboxes to something unique
// incorrect (10) - correct


function results() {

    $("#content").hide();

    if (document.getElementById("answer1").checked === true) {
        correct++
        console.log(document.getElementById("answer1").checked);
    }

    // default 10 incorrect
    incorrect = 10 - correct

    // displays the results page
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
    $("#results").show();
}
