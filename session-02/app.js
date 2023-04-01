(function(){
    document.getElementById('year').innerText = new Date().getFullYear();
    let box1, box2, box3, box4, box5, box6, box7, box8, box9;
const row = num => document.querySelectorAll('div')[num];
const setBoxIndex = (ele,num) => ele.setAttribute('box-index', num)
	const row1 = row(0), row2 = row(4), row3 = row(8);
	box1 = row1.querySelectorAll('div')[0]
	box2 = row1.querySelectorAll('div')[1]
	box3 = row1.querySelectorAll('div')[2]
	box4 = row2.querySelectorAll('div')[0]
	box5 = row2.querySelectorAll('div')[1]
	box6 = row2.querySelectorAll('div')[2]
	box7 = row3.querySelectorAll('div')[0]
	box8 = row3.querySelectorAll('div')[1]
	box9 = row3.querySelectorAll('div')[2]
const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
boxes.forEach((box, i) => setBoxIndex(box, i + 1));
const status = document.querySelector("#status");
const restart = document.querySelector("#restart");
const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const generateBoard = (len) => {
	const arr = []
	for (let i = 0; i < len + 1; i++) {
		arr.push('');
	}
	return arr
}
let options = generateBoard(9);

let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    boxes.forEach(box => box.addEventListener("click", boxClicked));
    restart.addEventListener("click", restartGame);
    status.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function boxClicked(){
    const boxIndex = this.getAttribute("box-index");
	    if(options[boxIndex] != "" || !running){
        return;
    }

    updateCell(this, boxIndex);
    checkWinner();
}
function updateCell(box, index){
    options[index] = currentPlayer;
    box.innerHTML = `<span>${currentPlayer}</span>`;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    status.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const boxA = options[condition[0]];
        const boxB = options[condition[1]];
        const boxC = options[condition[2]];
	        if(boxA == "" || boxB == "" || boxC == ""){
            continue;
        }
        if(boxA == boxB && boxB == boxC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        status.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(options.filter(option => option == '').length <=1 ){
        status.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = generateBoard(9);
    status.textContent = `${currentPlayer}'s turn`;
    boxes.forEach(box => box.textContent = "");
    running = true;
}
})()