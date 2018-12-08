



    //declaring variables
    var intervalId;
    var randomInterval;
    var time = 10;
    var startOver = false;
    var randomNum = Math.floor((Math.random() * 2));
    var userClick = false;
    var run = true;

    

    //declaring the questions and answers
    var triviaQ = {

        0: {
            Genre: "Anime",
            question: " In Heros Academia, What attack does All Might like to use to take out enemies?",
                answers: ["Flame Punch", "Volcanic Smash", "Texas Smash", "Hulk Smash"],
                answerT: "Texas Smash",
            image: ""
        },
        1: {
            Genre: "Anime",
            question: "In YuYu Hakusho, what power technique does Genki teach and perfect with Yusuke?",
                answers: ["Spirit Fist", "Spirit Slash", "Deroit Smash", "Spirit Gun"],
                answerT: "Spirit Gun",
            image: ""
        },
    }

    // Grabbing elements from the DOM 
    var questionM = document.getElementById("question");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var userDecision = document.getElementsByClassName("dClick");

    
    // button used to start timer and begin program
    var startButton = document.getElementById("start");
    
    startButton.addEventListener('click', function() {

        //removing the click button
        startButton.remove();

        
        
        
        
        
        //  Variable setInterval that runs the count down clock
        intervalId = setInterval(count, 1000);
        //setInterval(timeUp, 11000);
        
        
        
        
    
        // Timer for user guesses
        var timeLeft = document.getElementById("timeLeft");
    
    //displaying the Questions to the DOM
    questionM.innerHTML = triviaQ[randomNum].question;

    // displaying the answers to the DOM
    answer1.innerHTML = triviaQ[randomNum].answers[0];
    answer2.innerHTML = triviaQ[randomNum].answers[1];
    answer3.innerHTML = triviaQ[randomNum].answers[2];
    answer4.innerHTML = triviaQ[randomNum].answers[3];

});

    //function that counts down from alloted time
    function count(){
        time--;
        if (time < 0){
           //var startOver = confirm("You ran out of time, try again?");
           var startOver = true;
           var delay = true; 
           
            if(startOver){
                
                startOverFun();
            }

        }
        //Displays time left
        timeLeft.innerHTML = time;
    }

    // Function that develops a random number and passes it to the count function
    function randomNumber(){
        var randomNum = Math.floor((Math.random() * 2));
        console.log(randomNum);
        return randomNum;
    }

    for (var i = 0 ; i < userDecision.length; i++) {
        userDecision[i].addEventListener('click', function() {
            var ID = this.getAttribute("value");
                console.log(triviaQ[randomNum].answers[ID]);
            var userPick = triviaQ[randomNum].answers[ID];
            var correctAns = triviaQ[randomNum].answerT;
                console.log(triviaQ[randomNum].answerT);

            if(userPick === correctAns){
                correct();

            }

        });         
    }
    
    function startOverFun(){
        clearInterval(intervalId);
        time = 10;

        randomNum = randomNumber();
        
        //displaying the Questions to the DOM
        questionM.innerHTML = triviaQ[randomNum].question;

        // displaying the answers to the DOM
        answer1.innerHTML = triviaQ[randomNum].answers[0];
        answer2.innerHTML = triviaQ[randomNum].answers[1];
        answer3.innerHTML = triviaQ[randomNum].answers[2];
        answer4.innerHTML = triviaQ[randomNum].answers[3];
    }

    function timeUp(){
        alert("Time is up");

    }

    function correct(){
        console.log("correct!!");
        alert("correct!")
    } 

    



    //WORKING CODE
    /*startButton.addEventListener('click', function() {

        //removing the click button
        startButton.remove();

        //  Variable setInterval that runs the count down clock
        intervalId = setInterval(count, 1000);
        //setInterval(timeUp, 11000);

        // Timer for user guesses
        var timeLeft = document.getElementById("timeLeft");
    
    //displaying the Questions to the DOM
    questionM.innerHTML = triviaQ[randomNum].question;

    // displaying the answers to the DOM
    answer1.innerHTML = triviaQ[randomNum].answers[0];
    answer2.innerHTML = triviaQ[randomNum].answers[1];
    answer3.innerHTML = triviaQ[randomNum].answers[2];
    answer4.innerHTML = triviaQ[randomNum].answers[3];

});

    //function that counts down from alloted time
    function count(){
        time--;
        if (time < 0){
           //var startOver = confirm("You ran out of time, try again?");
           var startOver = true;
           var delay = true; 
           
            if(startOver){
                
                startOverFun();
            }

        }
        //Displays time left
        timeLeft.innerHTML = time;
    }

    // Function that develops a random number and passes it to the count function
    function randomNumber(){
        var randomNum = Math.floor((Math.random() * 2));
        console.log(randomNum);
        return randomNum;
    }

    for (var i = 0 ; i < userDecision.length; i++) {
        userDecision[i].addEventListener('click', function() {
            var ID = this.getAttribute("value");
                console.log(triviaQ[randomNum].answers[ID]);
            var userPick = triviaQ[randomNum].answers[ID];
            var correctAns = triviaQ[randomNum].answerT;
                console.log(triviaQ[randomNum].answerT);

            if(userPick === correctAns){
                correct();

            }

        });         
    }
    
    function startOverFun(){
        clearInterval(intervalId);
                time = 10;

                randomNum = randomNumber();
               
                //displaying the Questions to the DOM
                questionM.innerHTML = triviaQ[randomNum].question;

                // displaying the answers to the DOM
                answer1.innerHTML = triviaQ[randomNum].answers[0];
                answer2.innerHTML = triviaQ[randomNum].answers[1];
                answer3.innerHTML = triviaQ[randomNum].answers[2];
                answer4.innerHTML = triviaQ[randomNum].answers[3];

        
    }

    function timeUp(){
        alert("Time is up");

    }

    function correct(){
        console.log("correct!!");
        alert("correct!")
    } 

     */