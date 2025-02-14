function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    let result="";
    if(choice===0){
        result="rock";
    }
    else if(choice===1){
        result="paper";
    }
    else[
        result="scissors"
    ]

    return result;
}

function getHumanChoice(){
    let choice=prompt("enter your choice");
    if(choice!="rock" && choice!="paper" && choice!="scissors"){
        console.log("enter a valid choice");
    }
    else{
       return choice;
    }
}



function playGame(){

    let humanScore=0;
    let computerScore=0;
    let round=0;

    function playRound(humanChoice,computerChoice){
        humanChoice=humanChoice.toLowerCase();
    
        if (humanChoice===computerChoice)
        {
            console.log('tie');
        }
        else if(humanChoice==="rock" && computerChoice==="scissors" ||
            humanChoice==="paper" && computerChoice==="rock" ||
            humanChoice==="scissors" && computerChoice==="paper" ) {
                console.log("You won!! "+humanChoice+" beats "+computerChoice);
                humanScore++;
        }
        else if(computerChoice==="rock" && humanChoice==="scissors" ||
            computerChoice==="paper" && humanChoice==="rock" ||
            computerChoice==="scissors" && humanChoice==="paper" ) {
                console.log("You lost!! "+computerChoice+" beats "+humanChoice);
                computerScore++;
        }
    }

    while(round<5){
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();
        console.log(playRound(humanSelection,computerSelection));
        round++;
    }

    if(humanScore===computerScore){
        console.log("Game over !! its a tie. Your score: "+humanScore);
    }
    else if(humanScore>computerScore){
        console.log("congratulations !! you xon. Your score: "+humanScore );
    }
    else{
        console.log("You lost !! ; Your score: "+humanScore);
    }

    
}

playGame();