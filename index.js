let userScore=0;
let compScore=0;
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const result_p = document.querySelector(".result>p");
const userImageEl= document.getElementById("user_img");
const compImageEl= document.getElementById("comp_img");

function charToWord(ch){
    if(ch==='r') return 'Rock';
    else if(ch ==='p') return 'Paper';
    return 'Scissors';
}
function won(userSelection,compSelection){
    userScore++;
    userScoreEl.innerHTML=userScore;
    compScoreEl.innerHTML=compScore;
    let user = charToWord(userSelection);
    let comp = charToWord(compSelection);
    let smallU = "(user)".fontsize(3).sub();
    let smallC = "(comp)".fontsize(3).sub();
    result_p.innerHTML=`${user}${smallU} takes over ${comp} ${smallC} ,You Win !!!`;
    document.getElementById(userSelection).classList.add("greenGlow");
    setTimeout(function(){document.getElementById(userSelection).classList.remove("greenGlow")},400);
}
function lost(userSelection,compSelection){
   
    compScore++;
    userScoreEl.innerHTML=userScore;
    compScoreEl.innerHTML=compScore;
    let user = charToWord(userSelection);
    let comp = charToWord(compSelection);
    let smallU = "(user)".fontsize(3).sub();
    let smallC = "(comp)".fontsize(3).sub();
    result_p.innerHTML=`${comp}${smallC} takes over ${user} ${smallU} ,You Lost !!!`;
    document.getElementById(userSelection).classList.add("redGlow");
    setTimeout(function(){document.getElementById(userSelection).classList.remove("redGlow")},400);
}
function draw(userSelection,compSelection){
    userScoreEl.innerHTML=userScore;
    compScoreEl.innerHTML=compScore;
    let user = charToWord(userSelection);
    let comp = charToWord(compSelection);
    let smallU = "(user)".fontsize(3).sub();
    let smallC = "(comp)".fontsize(3).sub();
    result_p.innerHTML=`${user}${smallU} draws ${comp} ${smallC}`;
    document.getElementById(userSelection).classList.add("blueGlow");
    setTimeout(function(){document.getElementById(userSelection).classList.remove("blueGlow")},400);

}
function render(ch){
    if(ch==='r') compImageEl.src="comp_images/rock.png";
    else if(ch ==='p') compImageEl.src="comp_images/paper.png";
    else compImageEl.src="comp_images/scissors.png";
}
function getCompSelection(){
    let op = ['r','p','s'];
    let res = Math.floor(Math.random()*3);
    let ch = op[res];
    render(ch);
    return ch;
}
function game(userSelection){
    let compSelection=getCompSelection();
    let combination = userSelection+compSelection;
    switch(combination){
        case 'rs':
        case 'sp':
        case 'pr': won(userSelection,compSelection); break;
        case 'sr':
        case 'ps':
        case 'rp': lost(userSelection,compSelection); break;
        case 'rr':
        case 'pp':
        case 'ss': draw(userSelection,compSelection);
    }
}
function main(){
    rock.addEventListener("click",function(){
        userImageEl.src="user_images/rock.png";
        game('r');
    });
    paper.addEventListener("click",function(){
        userImageEl.src="user_images/paper.png";
        game('p');

    });
    scissor.addEventListener("click",function(){
        userImageEl.src="user_images/scissors.png";
        game('s');

    });
}
main();