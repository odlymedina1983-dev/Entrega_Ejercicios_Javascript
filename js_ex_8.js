let areaText = document.getElementById('parEntry');
let caracteresScreen = document.getElementById('caracteresScreen');
let wordsScreen = document.getElementById('wordsScreen');

areaText.addEventListener('input', (e) => {
    let textValue = areaText.value;
    procesarText(textValue);
});

function procesarText(textValue) {
    let cleanTextTrim = textValue.trim();
    //console.log(cleanTextTim);
    let textNoSpaces = cleanTextTrim.split(' ');
    //console.log(textNoSpaces);
    let filteredWords = textNoSpaces.filter(filtered => {
        return filtered !== '';        
    });
    let wordAmount = filteredWords.length;    
    let cleanString = cleanTextTrim.replace(/\s/g,'');
    let caracAmount = cleanString.length;
    renderScreens(caracAmount,wordAmount);
}
function renderScreens(caracAmount,wordAmount){
    caracteresScreen.value = caracAmount;
    wordsScreen.value = wordAmount;
}value