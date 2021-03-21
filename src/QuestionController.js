import Mathf from './Mathf';


export default class QuestionController {
    constructor(QuestaoData) {
        this.QuestaoData = QuestaoData;
        this.porra = "porra";
        this.alternativaSelecionada = "";
        this.alternativaCerta = "";
        /*
        enunciado
        alternativas []
        alternativa certa        
        */
    }

    gerarElementos() {
        var container = document.createElement("div");
        container.id = "Questao";
        var header = document.createElement("div");
        header.innerHTML = "Questão 1";
        header.classList.add("questHeader");
        container.appendChild(header);
        var enunciado = document.createElement("div");
        enunciado.classList.add("enunciado");
        enunciado.innerHTML = this.QuestaoData.enunciado;
        container.appendChild(enunciado);
        var form = document.createElement("form");
        container.appendChild(form);


        this.geraAlternativas(form);

        return container;
    }

    geraAlternativas(form) {

        this.alternativaCerta = this.QuestaoData.alternativasTxt[this.QuestaoData.alternativaCerta];
        this.QuestaoData.alternativasTxt = this.randomizeArray(this.QuestaoData.alternativasTxt);


        var elementosDasAlternativas = [];
        for (let i = 0; i < this.QuestaoData.alternativasTxt.length; i++) {
            let alternativaElement = this.geraAlternativaElements(this.QuestaoData.alternativasTxt[i], i);
            form.appendChild(alternativaElement);
            elementosDasAlternativas.push(alternativaElement);
            alternativaElement.onclick = (event) => {
                this.selecionaAlternativa.bind(this)(event, alternativaElement, elementosDasAlternativas, this.QuestaoData.alternativasTxt[i]);
            };
        }
    }

    geraAlternativaElements(alternativa, id) {
        const letras = ['A', 'B', 'C', 'D', 'E', 'F']
        let InputAlternativa = document.createElement("input");
        InputAlternativa.type = "radio";
        InputAlternativa.id = "alternativa-" + id;
        InputAlternativa.value = InputAlternativa.id;
        InputAlternativa.name = "alt";
        let label = document.createElement("label");
        label.htmlFor = InputAlternativa.id;
        label.innerHTML = alternativa;
        label.prepend(InputAlternativa);

        let AltLetra = document.createElement("div");
        AltLetra.classList.add("alternativaLetra");
        AltLetra.innerHTML = letras[id];
        label.prepend(AltLetra);

        return label;
    }


    selecionaAlternativa(event, elemento, elementosDasAlternativas, alternativaTxt) {

        if (event.target != elemento)
            return;

        elementosDasAlternativas.forEach(element => {
            element.classList.remove('selected');
        })

        event.target.classList.add("selected");
        this.alternativaSelecionada = alternativaTxt;

        this.validar();

    }

    validar() {
        if (this.alternativaSelecionada == this.alternativaCerta) {

            console.log("Acertou: "+this.alternativaSelecionada);
        }
    }

    randomizeArray(array) {
        var oldArray = array;
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