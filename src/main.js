import './global.css';
import renderer from './app.js';

document.querySelector('#app').innerHTML = renderer();

let convertBtn = document.getElementById("convert");
let clearBtn = document.getElementById("clear");
let outputContainer = document.getElementById("converted");
let inputvalue = document.getElementById("input-value");

convertBtn.addEventListener("click",converter);
clearBtn.addEventListener("click",clearer);

function converter() {
    let outputValue = (inputvalue.value)*(87.54);
    outputer(outputValue);
}

function clearer() {
    outputContainer.innerHTML = ``
}

function outputer(value) {
    outputContainer.innerHTML = `
        <p>The equivalent value of <i>$${inputvalue.value ? inputvalue.value : 0}</i> is: ₹<span id="converted_value"><b>${value}</b></span></p>
    `;
}