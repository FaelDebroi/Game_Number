const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max:10,// o numero maximo no random
    attemptsNumber: 0, // numero minimo do ramdom 
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e){
e.preventDefault();

let kick = document.getElementById('kick').value;

if(!kick){
    alert('digite algum valor!!!'  )
    return;
};

updateAttempt(attempt, ++Guess.attemptsNumber);

if(numberDrawn == kick){
    playAgain();
    status.innerHTML ='Parabens, voce acertou!';
    result.style.transition = '0.4s';
    result.style.backgroundColor = '#37c978';
    result.style.color = '#fff';
    status.style.color = '#fff';
    clear();
}else if(numberDrawn > kick){
    status.innerHTML='O numero é maior!!!';
    status.style.color='#de455%';
    clear();
}else if (numberDrawn< kick){
    status.innerHTML='o numero é menor';
    status.style.color='#de4251';
    clear();
}
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};
function clear(){
    document.getElementById('kick').value ='';
};
