import Mathf from './Mathf';


export default class QuestionController {
    constructor(QuestaoData) 
    {
        this.QuestaoData = QuestaoData;
        /*
        enunciado
        alternativas []
        alternativa certa        
        */
    }

    gerarElementos() {
        var container = document.createElement("div");
        container.id="Questao";
        var header = document.createElement("div");
        header.innerHTML="Questão 1";
        header.classList.add("questHeader");
        container.appendChild(header);
        var enunciado = document.createElement("div");
        enunciado.classList.add("enunciado");
        enunciado.innerHTML=this.QuestaoData.enunciado;
        container.appendChild(enunciado);
        var form = document.createElement("form");
        container.appendChild(form);
        var alternativaCerta =  this.QuestaoData.alternativas[this.QuestaoData.alternativaCerta];
        this.QuestaoData.alternativas = this.randomizeArray(this.QuestaoData.alternativas);
        console.log("certa:"+alternativaCerta);
        
        for(var i=0; i<this.QuestaoData.alternativas.length; i++) {

            var alternativa = document.createElement("input");
            alternativa.type = "radio";
            alternativa.id = "alternativa-"+i;
            alternativa.value =  alternativa.id ;
            alternativa.name = "alt";
            var label = document.createElement("label");
            label.htmlFor =  alternativa.id;
            label.innerHTML = this.QuestaoData.alternativas[i];
            label.prepend(alternativa);
            form.appendChild(label);
            //form.appendChild(document.createElement("br"));
            console.log(this.QuestaoData.alternativas[i]);

            if(alternativaCerta==this.QuestaoData.alternativas[i]){
                label.classList.add("alternativaCerta");
            }
        }


        return  container ;
    }

    randomizeArray(array) {
        var oldArray = array;
        var length = array.length;
        var newArray = [];
        for(var i = 0; i<length; i++){
            var random = Math.round(Mathf.RandomRange(0, oldArray.length-1));
            newArray.push(oldArray[random]);
            oldArray.splice(random, 1);
        }
        return newArray;
    }


}