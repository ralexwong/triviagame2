// create variables for answer count
var correct = 0;
var incorrect = 0;





// array to hold questions/answers/images as each an object so they are all contained within its group
// 

var triviaQuestions = [{
    question: "What was the top-grossing film for 2002?",
    answers: ["Spider Man", "Signs", "Star Wars: Episode II", "My Big Fat Greek Wedding"],
    correctAnswer: "Spider Man",
    images: "../imges/spiderman.jpg"},
    {
    question: "Who played Noah in the movie 'The Notebook'?",
    answers: ["Ryan Phillipe", "Ryan Gossling", "Freddit Prinze Jr.", "Colin Farrell"],
    correctAnswer: "Ryan Gossling",
    images: "../imges/ryangossling.jpg"},
    {
    question: "Which 2005 film's tagline is 'Better Late Than Never'?",
    answers: ["The 40 Year-Old Virgin", "Fantastic Four", "The Hitchhiker's Guide to the Galaxy", "The Ring"],
    correctAnswer: "The 40 Year-Old Virgin",
    images: "../imges/virgin.jpg"},
    {
    question: "In what U.S. city does the action take place in 'The Departed'?",
    answers: ["Beverly Hills", "Las Vegas", "Boston", "Miami"],
    correctAnswer: "Boston",
    images:"../imges/boston.jpg" },
    {
    question: "In 'The Godfather', what does film producer Jack Woltz discover in his bed?",
    answers: ["Dead Prostitute", "Sack of Money", "Python", "Horse's Head"],
    correctAnswer: "Horse's Head",
    images: "../imges/horse.jpg"},
    {
    question: "Which film ended with real people and their movie counterparts placing rocks on a grave?",
    answers: ["Schindler's List", "Pearl Harbor", "Saving Private Ryan", "The Pianist"],
    correctAnswer: "Schindler's List",
    images: "../imges/list.jpg"},
    {
    question: "An alien attack destroyed the White House in what 1996 summer blockbuster?",
    answers: ["The Day After Tomorrow", "Signs", "Armageddon", "Independence Day"],
    correctAnswer: "Independence Day",
    images: "../imges/alien.jpg"},
]





// hides quiz before the game starts
$(document).ready(function(){
    $("#content").hide();
    $("#results").hide();
});


// shows the quiz, hides the start page
$(document).ready(function(){
    $(".start").on("click", function() {
        replace();
        $(".start").hide();
        $("#content").show();

        $("#options").on("click", function() {
            if($("p:contains(" + triviaQuestions[0].correctAnswer + ")")) {
                console.log(triviaQuestions[0].correctAnswer);
                correct++;
                triviaQuestions.shift();
                replace()
            }
            else {
                incorrect++
                triviaQuestions.shift();
                replace();

            }
        });
        


        // if ($("#options").on("click", ))


        // have a timer that starts at 31 seconds and goes down 1 second
        // when the start button is hit
        // when timer reaches 0 hide the quiz
        // show results

        // var timer = 30;
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

// replaces the questions and answers shown to the user.
function replace() {

    $("#question").html(triviaQuestions[0].question);
    $("#option1").html(triviaQuestions[0].answers[0]);
    $("#option2").html(triviaQuestions[0].answers[1]);
    $("#option3").html(triviaQuestions[0].answers[2]);
    $("#option4").html(triviaQuestions[0].answers[3]);

}




// takes input of radio checkboxes
// change id of all right answer checkboxes to something unique
// incorrect (10) - correct


function results() {

    $("#content").hide();


    // displays the results page
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
    $("#results").show();
}
