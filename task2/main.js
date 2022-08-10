const result = document.querySelector("#result");
const run = document.querySelector("#btn1");
const womanDiv = document.querySelector("#woman");
const manDiv = document.querySelector("#man");
const arrNames = ["Anna", "Narek", "Ani", "Karen", "Hasmik", "Aren", "Sayat", "Anahit", "Heghine", "Artur", "Tatev"];
const arrSurnames = ["Baghdasaryan", "Gevorgyan", "Haghverdyan", "Tovmasyan", "Vardanyan"];


run.addEventListener("click", e =>{
    const arrWoman = ["Anna", "Ani", "Hasmik", "Anahit", "Heghine", "Tatev"];
    let name = arrNames[parseInt(Math.random() * arrNames.length)];
        arrWoman.includes(name)?
            womanDiv.textContent = `${name} ${arrSurnames[parseInt(Math.random() * arrSurnames.length)]}`:
            manDiv.textContent = `${name} ${arrSurnames[parseInt(Math.random() * arrSurnames.length)]}`;
});