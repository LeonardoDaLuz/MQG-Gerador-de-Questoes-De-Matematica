import QuestionController from './QuestionController';
import QuestionManager from './QuestionManager';


var geradorContainer = document.getElementById("geradorContainer");

let questionManager = new QuestionManager();
window.questionManager = questionManager;
//questionManager.gerar(geradorContainer, [ regraDeTres ]);
questionManager.gerar("geradorContainer", [ "regra de tres" ]);

 

