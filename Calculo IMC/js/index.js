import Usuário from './usuario.js';

const form = document.getElementById('meuForm');
const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    const nome = document.getElementById('txtNome').value;
    const idade = parseInt(document.getElementById('txtIdade').value);
    const peso = parseFloat(document.getElementById('txtPeso').value);
    const altura = parseFloat(document.getElementById('txtAltura').value);



    const usuário = new Usuário(nome, idade, peso, altura);
    adicionarPessoaNaTabela(usuário);

    form.reset(); // Limpa os campos do formulário
});

    

function adicionarPessoaNaTabela(pessoa) {
    const novaLinha = tabela.insertRow(tabela.rows.length);
    const celulaNome = novaLinha.insertCell(0);
    const celulaIdade = novaLinha.insertCell(1);
    const celulaPeso = novaLinha.insertCell(2);
    const celulaAltura = novaLinha.insertCell(3);
    const celulaIMC = novaLinha.insertCell(4);
    const celulaClassificacao = novaLinha.insertCell(5);

    celulaNome.textContent = pessoa.nome;
    celulaIdade.textContent = pessoa.idade;
    celulaPeso.textContent = pessoa.peso;
    celulaAltura.textContent = pessoa.altura;
    celulaIMC.textContent = pessoa.imc.toFixed(2); // Exibe o IMC com duas casas decimais
    celulaClassificacao.textContent = pessoa.classificacao;
}






