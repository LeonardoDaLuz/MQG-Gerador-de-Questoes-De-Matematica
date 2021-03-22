import Mathf from '../Mathf';

var templatesDeQuestoes = [Questao1, Questao2, Questao3];

function Questao1() {

    let numerDeMaquinas = Mathf.RandomRange(2, 90).toFixed();
    let producaoPorMaquina = Mathf.RandomRange(50, 500).toFixed();
    let producaoDeFolasCom40Maquinas = numerDeMaquinas * producaoPorMaquina;
    let percentualDeMaquinasQuePararaPraManutencao = Mathf.RandomRange(2, 95).toFixed() * 0.01;

    let enunciado = `
    Na linha de produção de um fábrica de papel, há ${numerDeMaquinas} máquinas, que, quando trabalhando juntas, produzem ${producaoDeFolasCom40Maquinas} folhas de papel por dia. 

Na semana passada, ${(percentualDeMaquinasQuePararaPraManutencao * 100).toFixed()}% das máquinas pararam para manutenção e não funcionaram. Então, a produção semanal, ou seja, dos sete dias desta semana foi de: `;

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

    let minutosNecessarios = Mathf.RandomRange(5, 60).toFixed();
    let quantidadeMangueiras = Mathf.RandomRange(1, 20).toFixed();
    let minutosAlmejados = Mathf.RandomRange(10, 50).toFixed();

    let a = quantidadeMangueiras * minutosNecessarios;
    let x = a / minutosAlmejados;
    let calculoErrado = Math.ceil((quantidadeMangueiras * minutosAlmejados) / minutosNecessarios);

    var enunciado = `Considerando-se que são necessários ${minutosNecessarios}min para encher um recipiente com ${quantidadeMangueiras} mangueiras, que possuem a mesma vazão de água, ao todo, quantas mangueiras iguais às anteriores são necessárias para que se encha esse recipiente em ${minutosAlmejados}min?`;

    return {
        enunciado: enunciado,
        alternativas: [
            Math.ceil(x) + " mangueiras",
            Math.ceil(calculoErrado) + " mangueiras",
            Math.ceil(x * 1.1) + " mangueiras",
            Math.ceil(calculoErrado * 1.5) + " mangueiras"
        ],
        alternativaCerta: 0
    };
}

function Questao3() {

    let fishBurguersPorDia = Math.round(Mathf.RandomRange(50, 2500));
    let dias = Math.round(Mathf.RandomRange(2, 25));
    let estoquePescado = Math.round(Mathf.RandomRange(1000, 10000));;

    let fishBurguersPorDiaProposta = 1200;
    let estoquePescadoProposta = 1260;    
    let diasResultado = (fishBurguersPorDia*dias*estoquePescadoProposta)/(fishBurguersPorDiaProposta*estoquePescado);
    let diasResultadoEerrado1 = (fishBurguersPorDia*dias*estoquePescado)/(fishBurguersPorDiaProposta*estoquePescadoProposta);
    let diasResultadoEerrado2 = (fishBurguersPorDiaProposta*dias*estoquePescadoProposta)/(fishBurguersPorDia*estoquePescado);

    var enunciado = `Numa indústria de processamento de pescado faz-se ${fishBurguersPorDia} fishburgers por dia durante ${dias} dias a partir de ${estoquePescado} kg de pescado.
 
    Nessas condições, com 1.260 kg de pescado, por quantos dias será possível manter uma produção de 1.200 unidades de fishburgers?`;

    return {
        enunciado: enunciado,
        alternativas: [
            Math.ceil(diasResultado) + " dias",
            Math.ceil(diasResultadoEerrado2)+" dias",
            Math.ceil(diasResultadoEerrado1)+" dias",
            Math.ceil(diasResultado * 1.5) +" dias",
        ],
        alternativaCerta: 0
    };
}


export default templatesDeQuestoes;