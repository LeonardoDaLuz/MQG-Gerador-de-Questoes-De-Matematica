import Mathf from './Mathf';
import QuestionView from './QuestionView';
import QuestionData from './QuestionData';

export default class QuestionController {

    constructor(template, name) {
        this.data = new QuestionData(template(), name)
    }

    gerar() {
        this.data.alternativas = this.randomizeArray(this.data.alternativas);
        this.view = new QuestionView(this.data);
        this.data.alternativas.forEach(item => {
            item.element.onclick = (event) => {
                this.selecionaAlternativa.bind(this)(event, item);
            }
        })

        return this.view.container;
    }

    selecionaAlternativa(event, item) {
        if (event.target != item.element)
            return;

        this.view.AtualizaSelecionar(this.data, item.element);
        this.data.alternativaSelecionada = item;
        this.validar();
    }

    validar() {
        this.view.AtualizaValidacao(this.data.alternativaCerta.element);
        if (this.data.alternativaSelecionada == this.data.alternativaCerta) {

        }
    }

    randomizeArray(array) {
        var oldArray = array;
        console.log(array);
        var length = array.length;
        var newArray = [];
        for (var i = 0; i < length; i++) {
            var random = Math.round(Mathf.RandomRange(0, oldArray.length - 1));
            newArray.push(oldArray[random]);
            oldArray.splice(random, 1);
        }
        return newArray;
    }


}

