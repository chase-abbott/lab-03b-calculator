
import { addTwoNumbers, 
         subTwoNumbers, 
         multTwoNumbers, 
         divideTwoNumbers } from './mathUtils.js'

const first = document.getElementById("first");
const second = document.getElementById("second");
const answer = document.getElementById("answer");

export function handleAdd () {
    const value1 = first.valueAsNumber;
    const value2 = second.valueAsNumber;
    answer.textContent = addTwoNumbers(value1, value2);
} 

export function handleSub () {
    const value1 = first.valueAsNumber;
    const value2 = second.valueAsNumber;
    answer.textContent = subTwoNumbers(value1, value2);
}

export function handleMult () {
    const value1 = first.valueAsNumber;
    const value2 = second.valueAsNumber;
    answer.textContent = multTwoNumbers(value1, value2);
}

export function handleDiv() {
    const value1 = first.valueAsNumber;
    const value2 = second.valueAsNumber;
    answer.textContent = divideTwoNumbers(value1, value2);  
} 
