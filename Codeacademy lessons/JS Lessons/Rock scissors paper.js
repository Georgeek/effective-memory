var Select = function () {
     var rand = Math.floor(Math.random() * 3);
     switch (rand) {
         case 0: return "rock";
            break;
         case 1: return "paper";
            break;
         case 2: return "scissors";
            break;
     }
    };

    var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
    var computerChoice = Select();

    var compare = function (choice1, choice2) {
        if (choice1 === choice2) {
            userChoice = prompt("The result is a tie! pick again");
            console.log("tie");
            return compare(userChoice, computerChoice);
        } else if (choice1 === "rock") {
            
            if (choice2 === "scissors") {
                return "rock wins";
            } else {
                return "paper wins"; 
            }
            
        } else if (choice1 === "paper") {
            
            if (choice2 === "rock") {
                return "paper wins";
            } else {
                return "scissors wins";
            }

        } else if (choice1 === "scissors") {
        
            if (choice2 === "rock") {
                return "rock wins";
            } else {
                return "scissors wins";
            }
        } else {
            userChoice = prompt("Incorrect input. Only rock, papper or scissors are allowed to print");
            if (userChoice !== null) {
                console.log("inappropirate input. NOT NULL");
                return compare(userChoice, computerChoice);
            } else {
                console.log("inappropriate input NULL");
            }

        }
    };


    var winner = compare(userChoice, computerChoice);
    alert("Computer: " + computerChoice + "\n" + "You: " + userChoice + "\n" + winner);
    var YesOrNo = confirm("Play again??");
    switch (YesOrNo) {
        case true: 
            console.log('play again');
            compare(userChoice, computerChoice);
            break;
        case false: 
                console.log('not again');
                break;
    }


/*
Answer: http://pastebin.com/9iDG32VW
You have the skills to build a game of your own design! Below are some ideas:
    What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?
    What if players in the game could also choose Rope in this game?
    In this version, if both players make the same choice, the game returns a tie. 
    What if the game didn't end there but instead asked both players for new choices?
*/



