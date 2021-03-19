
import { addTwoNumbers, subTwoNumbers, multTwoNumbers, divideTwoNumbers } from './mathUtils.js'

const addFirstInput = document.getElementById("first-addition");
const addSecondInput = document.getElementById("second-addition");
const addAnswer = document.getElementById("addition-answer");

export function handleAdd () {
    const value1 = addFirstInput.valueAsNumber;
    const value2 = addSecondInput.valueAsNumber;
    addAnswer.textContent = addTwoNumbers(value1, value2);
} 

const subFirstInput = document.getElementById("first-sub");
const subSecondInput = document.getElementById("second-sub");
const subAnswer = document.getElementById("sub-answer");

export function handleSub () {
    const value1 = subFirstInput.valueAsNumber;
    const value2 = subSecondInput.valueAsNumber;
    subAnswer.textContent = subTwoNumbers(value1, value2);
}

const multFirstInput = document.getElementById("first-mult");
const multSecondInput = document.getElementById("second-mult");
const multAnswer = document.getElementById("mult-answer");

export function handleMult () {
    const value1 = multFirstInput.valueAsNumber;
    const value2 = multSecondInput.valueAsNumber;
    multAnswer.textContent = multTwoNumbers(value1, value2);
}

const divideFirstInput = document.getElementById("first-divide");
const divideSecondInput = document.getElementById("second-divide");
const divideAnswer = document.getElementById("divide-answer");

export function handleDiv() {
    const value1 = divideFirstInput.valueAsNumber;
    const value2 = divideSecondInput.valueAsNumber;
    divideAnswer.textContent = divideTwoNumbers(value1, value2);  
} 