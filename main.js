// Buena suerte!!
/**1. Create a variable for each button, might be an array including the 3


2. Computer "random decision" bewteen 3 options: A function!


3. Loop to link the player decision with the random computer decision. If the "player decision is..." then computer = "random decision".


4. Arrange the decisions between player wins, losses and draws: 
    Wins:
        If player decision === "scissors" && random decision === "paper"
        If player decision === "paper" && random decision === "rock"
        If player decision === "rock" && random decision === "scissors"

    Losses:
        If player decision === "scissors" && random decision === "rock"
        If player decision === "paper" && random decision === "scissors"
        If player decision === "rock" && random decision === "paper"

    Draws:
        If player decision === "scissors" && random decision === "scissors"
        If player decision === "paper" && random decision === "paper"
        If player decision === "rock" && random decision === "rock"   

5. Connect with nodes: document.getElementById('').innerHTML
*/


const decisions = ["scissors","paper","rock"];

function game(playerDecision){
    const computerDecision = decisions[Math.floor(Math.random()*3)];

    if (playerDecision === computerDecision){
        console.log("it's a draw!");
    } else {
        console.log("pending...")
    }
    console.log("computer pick: " + computerDecision);
}


console.log(game("scissors"));
