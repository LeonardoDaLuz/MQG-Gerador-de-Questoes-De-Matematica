export default class QuestionView {
    constructor(data) {
        this.container = document.createElement("div");
        this.container.id = "Questao";
        let header = document.createElement("div");
        header.innerHTML = data.name;
        header.classList.add("questHeader");
        this.container.appendChild(header);
        let enunciado = document.createElement("div");
        enunciado.classList.add("enunciado");
        enunciado.innerHTML = data.enunciado;
        this.container.appendChild(enunciado);
        let form = document.createElement("form");
        this.container.appendChild(form);
        this.container.form = form;
        form.elementosDasAlternativas = this.geraAlternativas(form, data);
    }

    geraAlternativas(form, data) {
        let elementosDasAlternativas = [];

        for (let i = 0; i < data.alternativas.length; i++) {
            let alternativaElement = this.geraAlternativaElements(data.alternativas[i].text, i);
            data.alternativas[i].element = alternativaElement;
            form.appendChild(alternativaElement);
            elementosDasAlternativas.push(alternativaElement);

        }

        return elementosDasAlternativas;
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

    AtualizaSelecionar(data, element) {

        data.alternativas.forEach(item => {
            item.element.classList.remove('selected');
        })

        element.classList.add("selected");
    }

    AtualizaValidacao(element) {
        console.log("PQP");
        console.log(element);
        element.classList.add("correta");
    }

}