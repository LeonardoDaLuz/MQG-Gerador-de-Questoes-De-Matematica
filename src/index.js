import QuestionController from './QuestionController';
import QuestionManager from './QuestionManager';


//console.log(templates);

let quantidade = 20;
var geradorContainer = document.getElementById("geradorContainer");

let questionManager = new QuestionManager();
window.questionManager = questionManager;
//questionManager.gerar(geradorContainer, [ regraDeTres ]);
questionManager.gerar(geradorContainer, [ "regra de tres" ]);

 
var kcta = [ 'abacate', 'tomate', 'gengibre', 'limao', 'morango', 'uva ']
console.log(kcta);

var filtered = kcta.filter((value, index, arr)=> {
    return value != 'tomate';
});

console.log(filtered);
//
