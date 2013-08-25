$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "Which country exports the most coffee by volume?",
        choices: ["Colombia", "Guatemala", "Costa Rica", "Brazil"],
        qNum : 0,
        correct : 3,
        fact: "In 2012 Brazil produced more than 5.6 billion pounds of coffee."
        },
        {
        question: "What country is the origin of the arabica coffee plant?",
        choices: ["Peru", "Ethiopia", "Indonesia", "Turkey"],
        qNum : 1,
        correct : 1,
        fact: "According to legend an Ethiopian goat herder named Kaldi discovered the coffee plant after his goats ate the coffee berries and began to dance."
        },
        {
        question: "Which roast level contains the highest concentration of caffeine?",
        choices: ["Light Roast", "City Roast", "Espresso Roast", "Dark Roast"],
        qNum : 2,
        correct : 0,
        fact: "The roasting process burns sugars and compounds such as caffeine.  Dark or bold roasts actually have less caffeine than lighter roasts."
        },
        {
        question: "At which temperature does water most effectively extract coffee oils and flavors?",
        choices: ["190-195 F", "195-200 F", "200-205 F", "Boiling"],
        qNum : 3,
        correct : 2,
        fact: "Most coffee pots use steam pressure to push water over coffee grounds which creates extraction temperatures that are too high."
        },
        {
        question: "Approximately how long does it take for ground coffee to become stale?",
        choices: ["15 minutes", "2 hours", "1 day", "1 week"],
        qNum : 4,
        correct : 0,
        fact: "Ground coffee becomes stale in as few as 15 minutes.  Whole bean coffee has less surface area and as a result stays fresh for approximately two weeks."
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#question_wrapper").on("click", "#submit", function () {
        updateCup();
        currentQuestion++;
        nextQuestion();
    });
    
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_cup").css("display", "none");
        $("#score_cup0").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function updateCup() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }
        if (numberCorrect == 1) {
            $(".score_cup").css("display", "none")
            $("#score_cup1").fadeIn();
        }
        else if (numberCorrect == 2) {
            $(".score_cup").css("display", "none")
            $("#score_cup2").fadeIn();
        }
        else if (numberCorrect == 3) {
            $(".score_cup").css("display", "none")
            $("#score_cup3").fadeIn();
        }
        else if (numberCorrect == 4) {
            $(".score_cup").css("display", "none")
            $("#score_cup4").fadeIn();
        }
        else if (numberCorrect == 5) {
            $(".score_cup").css("display", "none")
            $("#score_cup5").fadeIn();
        }
    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});
