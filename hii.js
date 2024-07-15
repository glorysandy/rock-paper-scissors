const choices=["✊🏻rock","🖐🏻paper","✌🏻scissors"];
const player=document.getElementById("playerDisplay");
const computer= document.getElementById("computerDisplay");
const resultcomes= document.getElementById("resultDisplay");
const playerscoree = document.getElementById("playerscores");
const computerscoree = document.getElementById("computerscores");

let playerscore=0;
let computerscore=0;

function  Game(playerChoice){

    const computerChoice = choices[ Math.floor(Math.random() *3)];
    console.log(computerChoice);
    let result="";

    if(playerChoice === computerChoice){
        result=" IT'S A TIE😍";

    }
    else{
        switch(playerChoice){
            case "✊🏻rock":
            result=  ( computerChoice === "✌🏻scissors") ? " YOU WIN!❤️🎉" : " YOU LOSE!💔";
           break;
            case "🖐🏻paper":
            result=  ( computerChoice === "✊🏻rock") ? " YOU WIN!❤️🎉" : " YOU LOSE!💔";
            break;
            case "✌🏻scissors":
            result=  ( computerChoice === "🖐🏻paper") ? " YOU WIN!❤️🎉" : " YOU LOSE!💔";
            break;
        }
  
    }
    player.textContent = ` 🧑🏻‍💻PLAYER: ${ playerChoice}`;
    computer.textContent = ` 🤖COMPUTER: ${ computerChoice }`;
    resultcomes.textContent =  result;
  
    resultcomes.classList.remove("greenText", "redText");
    
    switch(result){
            case  " YOU WIN!❤️🎉":
                resultcomes.classList.add("greenText");
                playerscore++;
                playerscoree.textContent= playerscore;
                break;
             case " YOU LOSE!💔" :
                    resultcomes.classList.add("redText");
                    computerscore++;
                    computerscoree.textContent= computerscore;
               break;
            }
        
}
