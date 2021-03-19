
import { handleAdd, handleSub, handleMult, handleDiv} from './handlers.js'

const addFirstInput = document.getElementById("first-addition");
const addSecondInput = document.getElementById("second-addition");
const addButton = document.getElementById("addition-button");
const addAnswer = document.getElementById("addition-answer");

addButton.addEventListener('click', () => {
    const value1 = addFirstInput.valueAsNumber;
    const value2 = addSecondInput.valueAsNumber;
    const sum = handleAdd;
    addAnswer.textContent = sum;
    // can set sum = handleAdd once figured out
})

const subFirstInput = document.getElementById("first-sub");
const subSecondInput = document.getElementById("second-sub");
const subButton = document.getElementById("sub-button");
const subAnswer = document.getElementById("sub-answer");

subButton.addEventListener('click', () => {
    const value1 = subFirstInput.valueAsNumber;
    const value2 = subSecondInput.valueAsNumber;
    const sub = value1 - value2;
    subAnswer.textContent = sub;
})

const multFirstInput = document.getElementById("first-mult");
const multSecondInput = document.getElementById("second-mult");
const multButton = document.getElementById("mult-button");
const multAnswer = document.getElementById("mult-answer");

multButton.addEventListener('click', () => {
    const value1 = multFirstInput.valueAsNumber;
    const value2 = multSecondInput.valueAsNumber;
    const mult = value1 * value2;
    multAnswer.textContent = mult;
})

const divideFirstInput = document.getElementById("first-divide");
const divideSecondInput = document.getElementById("second-divide");
const divideButton = document.getElementById("divide-button");
const divideAnswer = document.getElementById("divide-answer");

divideButton.addEventListener('click', () => {
    const value1 = divideFirstInput.valueAsNumber;
    const value2 = divideSecondInput.valueAsNumber;
    const divide = value1 / value2;
    divideAnswer.textContent = divide;
})

