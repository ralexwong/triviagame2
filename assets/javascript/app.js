$(document).ready(function () {

    // create variables for answer count
    var correct = 0;
    var incorrect = 0;

    // array to hold questions/answers/images as each an object so they are all contained within its group

    var triviaQuestions = [{
        question: "What was the top-grossing film for 2002?",
        answers: ["Signs", "Spider Man", "Star Wars: Episode II", "My Big Fat Greek Wedding"],
        correctAnswer: "Spider Man",
        images: "assets/images/spiderman.jpg"
    },
    {
        question: "Who played Noah in the movie 'The Notebook'?",
        answers: ["Ryan Phillipe", "Ryan Gossling", "Freddit Prinze Jr.", "Colin Farrell"],
        correctAnswer: "Ryan Gossling",
        images: "assets/images/ryangossling.jpg"
    },
    {
        question: "Which 2005 film's tagline is 'Better Late Than Never'?",
        answers: ["The 40 Year-Old Virgin", "Fantastic Four", "The Hitchhiker's Guide to the Galaxy", "The Ring"],
        correctAnswer: "The 40 Year-Old Virgin",
        images: "assets/images/virgin.jpg"
    },
    {
        question: "In what U.S. city does the action take place in 'The Departed'?",
        answers: ["Beverly Hills", "Las Vegas", "Boston", "Miami"],
        correctAnswer: "Boston",
        images: "assets/images/boston.jpg"
    },
    // {
    //     question: "In 'The Godfather', what does film producer Jack Woltz discover in his bed?",
    //     answers: ["Dead Prostitute", "Sack of Money", "Python", "Horse's Head"],
    //     correctAnswer: "Horse's Head",
    //     images: "assets/images/horse.jpg"
    // },
    // {
    //     question: "Which film ended with real people and their movie counterparts placing rocks on a grave?",
    //     answers: ["Schindler's List", "Pearl Harbor", "Saving Private Ryan", "The Pianist"],
    //     correctAnswer: "Schindler's List",
    //     images: "assets/images/list.jpg"
    // },
    // {
    //     question: "An alien attack destroyed the White House in what 1996 summer blockbuster?",
    //     answers: ["The Day After Tomorrow", "Signs", "Armageddon", "Independence Day"],
    //     correctAnswer: "Independence Day",
    //     images: "assets/images/alien.jpg"
    // }
    ]


    // hides quiz before the game starts
    $("#content").hide();
    $("#results").hide();


    // shows the quiz, hides the start page
    $(".start").on("click", function () {

        // inserts the question and answers into the html
        replace();

        // hides the start button
        $(".start").hide();

        // show the timer, question, and answers
        // intitates the timer
        $("#content").show();
    });


    // replaces the questions and answers shown to the user.
    function replace() {

        $("#outcome").hide();
        $("#showAnswer").hide();
        $("#imageInput").empty();

        $("#quiz").append("<p id=question>" + triviaQuestions[0].question + "</p>");

        $("#quiz").append("<p class=options value='" + triviaQuestions[0].answers[0] + "'>" + triviaQuestions[0].answers[0] + "</p>");
        $("#quiz").append("<p class=options value='" + triviaQuestions[0].answers[1] + "'>" + triviaQuestions[0].answers[1] + "</p>");
        $("#quiz").append("<p class=options value='" + triviaQuestions[0].answers[2] + "'>" + triviaQuestions[0].answers[2] + "</p>");
        $("#quiz").append("<p class=options value='" + triviaQuestions[0].answers[3] + "'>" + triviaQuestions[0].answers[3] + "</p>");
        
        timer();

        // checks what answer the user picks
        $(".options").on("click", function () {

            console.log(this.textContent);

            // checks what the answer is and compares it to the correct answer in the triviaQuestions array
            if (this.textContent === triviaQuestions[0].correctAnswer) {
                console.log(triviaQuestions[0].correctAnswer);

                // stops the timer
                clearInterval(timer);
                correct++;

                // intitates the function to display to the user they got the right answer
                rightAnswerScreen();

                // deletes the first element in the array and shifts everything down
                triviaQuestions.shift();

                // deletes the previous answers and questions from the html
                $("#quiz").empty();

                // checks if its the end of the quiz
                checkArray();

                // starts the replace function after 3 seconds
                // the time isnt that important but thought 3 seconds is a good buffer time inbetween questions
                setTimeout(replace, 3000);

                // shows new answers and questions
                $("#quiz").show();
                console.log(triviaQuestions);
            }

            else {
                console.log(triviaQuestions[0].correctAnswer);
                clearInterval(timer);
                incorrect++;
                wrongAnswerScreen();
                triviaQuestions.shift();
                $("#quiz").empty();
                checkArray();
                setTimeout(replace, 3000);
                $("#quiz").show();
            }
        });
    }

    // when the user gets the right answer
    function rightAnswerScreen() {
        $("#quiz").hide();
        $("#outcome").html("Correct!");
        $("#outcome").show();
        $("#imageInput").append("<img id='image' src='" + triviaQuestions[0].images + "' />");
    }

    // when user gets the wrong answer
    function wrongAnswerScreen() {
        $("#quiz").hide();
        $("#outcome").html("Nope!");
        $("#outcome").show();
        $("#showAnswer").html("The correct answer was: " + triviaQuestions[0].correctAnswer);
        $("#showAnswer").show();
        $("#imageInput").append("<img id='image' src='" + triviaQuestions[0].images + "'/>");
    }

    // when user runs out of time
    function timeOutScreen() {
        $("#outcome").html("Out of Time!");
        $("#outcome").show();
        $("#showAnswer").html("The correct answer was: " + triviaQuestions[0].correctAnswer);
        $("#showAnswer").show();
        $("#imageInput").append("<img id='image' src='" + triviaQuestions[0].images + "'/>");
    }

    // when the user runs of time
    function timedOut() {
        console.log(triviaQuestions[0].correctAnswer);
        clearInterval(timer);
        incorrect++;
        triviaQuestions.shift();
        $("#quiz").empty();
        checkArray();
        setTimeout(replace, 3000);
        $("#quiz").show();
    }

    // if the triviaQuestions array is empty (no more questions), then it will post the results
    function checkArray() {
        if (triviaQuestions.length === 0) {
            $("#postquestion").hide();
            results();
        }
    }

    // timer function
    function timer() {

        var sec = 30;
        var timer = setInterval(function () {
            document.getElementById('timerNumber').innerHTML = sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                timeOutScreen();
                timedOut();
            }
        }, 1000);
    }

    // displays the results for the user
    function results() {

        $("#content").hide();

        $("#correct").html(correct);
        $("#incorrect").html(incorrect);
        $("#results").show();
    }


});