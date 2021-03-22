import QuestionController from './QuestionController';
import Mathf from './Mathf';
import regraDeTres from './templates/regraDeTres';
import './geradorDeQuestoes.css';


const templatesKeys = {
    "regra de tres": regraDeTres,
    
};

export default class QuestionManager {


    gerar(containerElementId, templateNames, quantidade = 10) {

        let container = document.getElementById(containerElementId);


        let length = Object.keys(templatesKeys).length;
        console.log();

        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }

        for (let i = 0; i < quantidade; i++) {
            let topicoSorteadoIndex = Math.round(Mathf.RandomRange(-0.45, templateNames.length - 1+0.45));
            let topicoSorteadoObj = templatesKeys[templateNames[topicoSorteadoIndex]];
            let templateSorteadoIndex = Math.round(Mathf.RandomRange(0, topicoSorteadoObj.length - 1));
            var questController = new QuestionController(topicoSorteadoObj[templateSorteadoIndex], "Questão " + (i + 1));
            container.append(questController.gerar());
        }
    }




}