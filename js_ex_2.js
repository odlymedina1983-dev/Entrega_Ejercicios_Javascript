let textoClicks = document.getElementById('textoClicks');
let contClicks = document.getElementById('contClicks');
let contador = 0;

contClicks.addEventListener('click', () => {
       contador += 1;
       clicksCounter();     
});

const clicksCounter = () => {
    textoClicks.textContent = `Clicks: ${contador}`;
};

clicksCounter();