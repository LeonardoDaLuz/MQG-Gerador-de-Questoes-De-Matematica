<h1>Gerador de questões de matematica</h1>
<p>Gera infinitas questões de matemática, sempre com valores diferentes, usando modelos de questões pré-programados (chamo de templates). No momento há apenas 3 templates para regra de três, esses 3 geram infinitas questoes onde os valores são randomizados de maneira coerente e calculam dinamicamente a resposta. Para conferir os templates entre na pasta "./src/templates/".</p>
<img src="https://github.com/LeonardoDaLuz/MQG-Gerador-de-Questoes-De-Matematica/blob/main/demonstracao/GifDemonstracaoGeracaoDeQuestoes.gif?raw=true" />

<code>
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

</code>