export default class Usuário {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.calcularIMC();
        this.definirClassificacao();
    }

    calcularIMC() {
        // Converter altura de cm para metros
        this.imc = this.peso / (this.altura ** 2);
    }

    definirClassificacao() {
        if (this.imc < 18.5) {
            this.classificacao = 'Abaixo do peso';
        } else if (this.imc < 24.9) {
            this.classificacao = 'Peso normal';
        } else if (this.imc < 29.9) {
            this.classificacao = 'Sobrepeso';
        } else if (this.imc < 34.9) {
            this.classificacao = 'Obesidade grau I';
        } else if (this.imc < 39.9) {
            this.classificacao = 'Obesidade grau II';
        } else {
            this.classificacao = 'Obesidade grau III';
        }
    }
}