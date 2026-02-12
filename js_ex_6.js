let buttonContainer = document.querySelector('.button-container');
let showDisplay = document.getElementById('display');
let intervalId = null;
let totalSeconds = 0;

buttonContainer.addEventListener('click',(e) => {
    let buttonActive = e.target;
    if (!buttonActive.classList.contains('controlBtn')) return;
    if (buttonActive.id === 'stop'){
        stopTimer();
    }
    if (buttonActive.id === 'start'){
        startTimer();
    }
    if (buttonActive.id === 'reset'){
        resetTimer();
    }
});

function startTimer(){
    if (intervalId !==null) {
        return;
    }else{
        intervalId = setInterval(() => {
        totalSeconds++;
        renderDisplay();
        }, 1000);
    }     
}
function renderDisplay(){
    let horas = Math.floor(totalSeconds/3600);
    let minutos = Math.floor((totalSeconds%3600)/60);
    let segundos = totalSeconds%60;
    let screenValueHoras = String(horas);
    let screenValueMinutos = String(minutos);
    let screenValueSegundos = String(segundos);
    let screenValue = screenValueHoras.padStart(2,'0') +':'+
                        screenValueMinutos.padStart(2,'0')+':'+
                        screenValueSegundos.padStart(2,'0');
    showDisplay.textContent = screenValue;
}
function stopTimer(){
    clearInterval(intervalId);
    intervalId = null;
}
function resetTimer(){
    clearInterval(intervalId);
    intervalId = null;
    totalSeconds = 0;
    renderDisplay();
}