let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = 'X';
let Isgameover = false;

// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [2, 4, 6, 5, 15, 135],
        [0, 4, 8, 5, 15, 45],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            Isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!Isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add on click lisenter to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ''
    });
    turn = 'X'
    Isgameover = false
    document.querySelector('.line').style.width = '0';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
})