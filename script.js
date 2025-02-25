const rock=document.createElement('button');
rock.setAttribute('id','rock');
const paper=document.createElement('button');
paper.setAttribute('id','paper');
const scissors=document.createElement('button');
scissors.setAttribute('id','scissors');
rock.textContent="rock";
paper.textContent='paper';
scissors.textContent='scissors';
const container=document.querySelector('.container');
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);


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



function playGame(){

    let humanScore=0;
    let computerScore=0;
    let gameover=false;

    function playRound(humanChoice,computerChoice){
        const result =document.createElement('p');
    
        if (humanChoice===computerChoice)
        {
            result.textContent='tie!!';
            container.appendChild(result);
        }
        else if(humanChoice==="rock" && computerChoice==="scissors" ||
            humanChoice==="paper" && computerChoice==="rock" ||
            humanChoice==="scissors" && computerChoice==="paper" ) {
                result.textContent="You won!! "+humanChoice+" beats "+computerChoice;
                container.appendChild(result);
                humanScore++;
        }
        else if(computerChoice==="rock" && humanChoice==="scissors" ||
            computerChoice==="paper" && humanChoice==="rock" ||
            computerChoice==="scissors" && humanChoice==="paper" ) {
                result.textContent="You lost!! "+computerChoice+" beats "+humanChoice;
                container.appendChild(result);
                computerScore++;
        }



        if(humanScore===5 || computerScore===5){
            const score =document.createElement('p');
            if(humanScore===5){
                score.textContent="congratulations !! you xon. Your score: "+humanScore ;
            }
            else{
                score.textContent="You lost !! ; Your score: "+humanScore
            }
            container.appendChild(score);
            gameover=true;
        }
    }






 
    container.addEventListener('click',(e)=>{
        if(gameover) return;

        let target=e.target;
        let computerSelection=getComputerChoice();
    
        switch(target.id){
    
            case 'rock':
                playRound('rock',computerSelection);
                break;

            case 'paper':
                playRound('paper',computerSelection);
                break;
            
            case 'scissors':
                playRound('scissors',computerSelection);
                break;
        }
    });




        
}


playGame();
