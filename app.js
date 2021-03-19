
import { handleAdd, 
         handleSub, 
         handleMult, 
         handleDiv} from './handlers.js'

const addition = document.getElementById("addition");
const equalsButton = document.getElementById("equals");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");


if (addition) {
    equalsButton.addEventListener('click', handleAdd);
 } else if (subtraction) {
    equalsButton.addEventListener('click', handleSub);
} else if (multiplication) {
    equalsButton.addEventListener('click', handleMult);
} else if (division) {
    equalsButton.addEventListener('click', handleDiv); 
};
                                                                                                             




