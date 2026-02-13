let generator = document.getElementById('generator');
let generatorScreen = document.getElementById('generatorScreen');
let genSubmit = document.getElementById('genSubmit');
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";


genSubmit.addEventListener('click', () => {
    validarCaracter();
});

function validarCaracter(){
    let cantCaracteres = Number(generator.value);
    if (cantCaracteres > 20 ){
        alert('Debe utilizar una cantidad de caracteres menor a 20 y mayor que 4 para un password seguro');
        generator.value = '';
        return;
    }
    if(cantCaracteres < 5 ){
        alert('Debe utilizar una cantidad de caracteres mayor que 4 y menor que 20 para un password seguro');
        generator.value = '';
        return;
    } 
    let passwordGen = randomPass(cantCaracteres);
    renderScreen(passwordGen);    
}
function randomPass(cantCaracteres) {
    let passGenerated = '';
    for (let i = 0; i < cantCaracteres; i++){
        let caracterIndex = Math.floor(Math.random()*caracteres.length);
        let caracter = caracteres[caracterIndex];
        passGenerated += caracter;
    }
    return passGenerated;
}

function renderScreen(password) {
    generatorScreen.value = password; 
}