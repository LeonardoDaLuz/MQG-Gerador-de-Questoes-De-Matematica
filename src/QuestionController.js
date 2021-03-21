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
        var enunciado = document.createElement("div");
        enunciado.classList.add("enunciado");
        enunciado.innerHTML=this.QuestaoData.enunciado;
        container.appendChild(enunciado);
        var form = document.createElement("form");
        container.appendChild(form);
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
        }


        return  container ;
    }
}