
import { handleAdd, 
         handleSub, 
         handleMult, 
         handleDiv} from './handlers.js'

const addition = document.getElementById("addition");
const equalsButton = document.getElementById("equals");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

function doMath () {
    if (addition) {
        handleAdd();
    } else if (subtraction) {
        handleSub();
    } else if (multiplication) {
        handleMult();
    } else if (division) {
        handleDiv();
    }
};

equalsButton.addEventListener('click', doMath);


                                                                                                             




