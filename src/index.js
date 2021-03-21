import QuestionController from './QuestionController';
import regraDeTres from './templates/regraDeTres';
import './geradorDeQuestoes.css';

const templates = {
    "dfs" : regraDeTres
}

//console.log(templates);

var geradorContainer = document.getElementById("geradorContainer");
var questController = new QuestionController(regraDeTres[0]());
geradorContainer.append(questController.gerarElementos());

console.log("KCTA");

//
