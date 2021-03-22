export default class QuestionData {
    constructor(_questaoDataCrua, name) {

        _questaoDataCrua.alternativas = this.removeDoubles(_questaoDataCrua);

        this.name=name;
        this.enunciado = _questaoDataCrua.enunciado;
        this.alternativas = [];
        _questaoDataCrua.alternativas.forEach(item => this.alternativas.push({ element: null, text: item }));
        this.alternativaCerta = this.alternativas[_questaoDataCrua.alternativaCerta];
        this.alternativaSelecionada = null;
    }

    removeDoubles(data) {
        let listaDosDuplicados = [];
        for(let i=0; i<data.alternativas.length; i++) {
            for(let ib=0; ib<data.alternativas.length; ib++) {
                if(i!=ib){
                    if(data.alternativas[i]==data.alternativas[ib]){
                        if(ib!=data.alternativaCerta){
                            listaDosDuplicados.push(ib)
                        } else{
                            listaDosDuplicados.push(i);
                        }
                    }
                }            
            }
        }
        let novaData = data.alternativas.filter((value, index, arr)=> {
            return !listaDosDuplicados.includes(index);
        });

        return novaData;
    }
}