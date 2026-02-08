const randomColors = () => {
    let randomRed = Math.floor(Math.random()*256);
    let randomGreen = Math.floor(Math.random()*256);
    let randomBlue = Math.floor(Math.random()*256);
    let randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return randomColor;
};

let colorChange = document.getElementById('colorChanger');

const bkgChange = (color) => {
    let bodySelect = document.querySelector('body');
    bodySelect.style.backgroundColor = color;
};

colorChange.addEventListener('click', () => {
    bkgChange(randomColors());
});