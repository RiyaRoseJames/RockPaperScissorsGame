const userScore_span=document.getElementById('userScore');
const compScore_span=document.getElementById('compScore');
const result_p=document.querySelector('.result p');
const scoreBoard_div=document.querySelector('.scoreBoard');
const rock_div=document.getElementById('rock');
const paper_div=document.getElementById('paper');
const scissor_div=document.getElementById('scissor');

let userScore=0;
let compScore=0;

function convertToWord(word)
{
    if(word === "rock") return "Rock";
    if(word === "paper") return "Paper";
    return "Scissor";
}

function getComputerChoice()
{
    const choices=['rock','paper','scissor'];
    const randomChoice=Math.floor(Math.random()*3);
    return choices[randomChoice];
}

function win(userChoice,computerChoice)
{
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize(3).sub();
    const colorGlow=document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.You WIN! 🔥`;
    colorGlow.classList.add('greenGlow');
    setTimeout(function(){colorGlow.classList.remove('greenGlow')},300);
}
function lose(userChoice,computerChoice)
{
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize(3).sub();
    const colorGlow=document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}.You LOST... 😞`;
    colorGlow.classList.add('redGlow');
    setTimeout(function(){colorGlow.classList.remove('redGlow')},300);
}
function draw(userChoice,computerChoice)
{
    const smallUserWord = "[user]".fontsize(3).sub();
    const smallCompWord = "[comp]".fontsize(3).sub();
    const colorGlow=document.getElementById(userChoice);
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} and ${convertToWord(computerChoice)}${smallCompWord}.It's a DRAW! 👎`;
    colorGlow.classList.add('greyGlow');
    setTimeout(function(){colorGlow.classList.remove('greyGlow')},300);
}

function game(userChoice)
{
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice)
    {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice,computerChoice);
            break;
    }
}

function main()
{
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissor_div.addEventListener('click', () => game("scissor"));
}
main();