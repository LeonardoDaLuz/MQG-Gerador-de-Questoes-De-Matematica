var templatesDeQuestoes = [Questao1, Questao1];

function Questao1() {

    var numerDeMaquinas = 40;
    var producaoPorMaquina = 375;
    var producaoDeFolasCom40Maquinas = numerDeMaquinas*producaoPorMaquina; 
    var percentualDeMaquinasQuePararaPraManutencao = 0.25;


    var  enunciado = `
    Na linha de produção de um fábrica de papel, há ${numerDeMaquinas} máquinas, que, quando trabalhando juntas, produzem ${producaoDeFolasCom40Maquinas} folhas de papel por dia. 

Na semana passada, ${percentualDeMaquinasQuePararaPraManutencao*100}% das máquinas pararam para manutenção e não funcionaram. Então, a produção semanal, ou seja, dos sete dias desta semana foi de: `;

    console.log(geradorContainer);
    return  {
        enunciado: enunciado,
        alternativas: [
            (producaoDeFolasCom40Maquinas*6*(1-percentualDeMaquinasQuePararaPraManutencao)).toFixed()+ " folhas",
            (producaoDeFolasCom40Maquinas*7*(1-percentualDeMaquinasQuePararaPraManutencao)).toFixed()+ " folhas",
            (producaoDeFolasCom40Maquinas*7*(1-percentualDeMaquinasQuePararaPraManutencao)*1.1).toFixed()+ " folhas",
            (producaoDeFolasCom40Maquinas*7*(1-percentualDeMaquinasQuePararaPraManutencao) *1.01).toFixed()+ " folhas",
            (producaoDeFolasCom40Maquinas*7*(1-percentualDeMaquinasQuePararaPraManutencao) *0.7).toFixed()+ " folhas"

        ],
        respostaCerta: "654"
    };
}




export default templatesDeQuestoes;