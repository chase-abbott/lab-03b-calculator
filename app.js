
import { handleAdd, 
         handleSub, 
         handleMult, 
         handleDiv} from './handlers.js'

const addButton = document.getElementById("addition-button");
addButton.addEventListener('click', handleAdd);


const subButton = document.getElementById("sub-button");
subButton.addEventListener('click', handleSub);

const multButton = document.getElementById("mult-button");
multButton.addEventListener('click', handleMult);

const divideButton = document.getElementById("divide-button");
divideButton.addEventListener('click', handleDiv);




