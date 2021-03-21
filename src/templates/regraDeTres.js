import Mathf from '../Mathf';

var templatesDeQuestoes = [Questao1, Questao1];

function Questao1() {

    let numerDeMaquinas = Mathf.RandomRange(2, 90).toFixed();
    let producaoPorMaquina = Mathf.RandomRange(50, 500).toFixed();
    let producaoDeFolasCom40Maquinas = numerDeMaquinas * producaoPorMaquina;
    let percentualDeMaquinasQuePararaPraManutencao = Mathf.RandomRange(2, 95).toFixed() * 0.01;


    let enunciado = `
    Na linha de produção de um fábrica de papel, há ${numerDeMaquinas} máquinas, que, quando trabalhando juntas, produzem ${producaoDeFolasCom40Maquinas} folhas de papel por dia. 

Na semana passada, ${(percentualDeMaquinasQuePararaPraManutencao * 100).toFixed()}% das máquinas pararam para manutenção e não funcionaram. Então, a produção semanal, ou seja, dos sete dias desta semana foi de: `;

    console.log(geradorContainer);
    return {
        enunciado: enunciado,
        alternativas: [
            (producaoDeFolasCom40Maquinas * 6 * (1 - percentualDeMaquinasQuePararaPraManutencao)).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao)).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 1.1).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 1.01).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 0.7).toFixed() + " folhas"

        ],
        alternativaCerta: 1
    };
}
function Questao2() {

    var numerDeMaquinas = Mathf.RandomRange(2, 90).toFixed();
    var producaoPorMaquina = Mathf.RandomRange(50, 500).toFixed();
    var producaoDeFolasCom40Maquinas = numerDeMaquinas * producaoPorMaquina;
    var percentualDeMaquinasQuePararaPraManutencao = Mathf.RandomRange(2, 95).toFixed() * 0.01;


    var enunciado = `
    Na linha de produção de um fábrica de papel, há ${numerDeMaquinas} máquinas, que, quando trabalhando juntas, produzem ${producaoDeFolasCom40Maquinas} folhas de papel por dia. 

Na semana passada, ${percentualDeMaquinasQuePararaPraManutencao * 100}% das máquinas pararam para manutenção e não funcionaram. Então, a produção semanal, ou seja, dos sete dias desta semana foi de: `;

    console.log(geradorContainer);
    return {
        enunciado: enunciado,
        alternativas: [
            (producaoDeFolasCom40Maquinas * 6 * (1 - percentualDeMaquinasQuePararaPraManutencao)).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao)).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 1.1).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 1.01).toFixed() + " folhas",
            (producaoDeFolasCom40Maquinas * 7 * (1 - percentualDeMaquinasQuePararaPraManutencao) * 0.7).toFixed() + " folhas"

        ],
        alternativaCerta: 1
    };
}




export default templatesDeQuestoes;