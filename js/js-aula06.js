/* Manipular matriz via objeto;
 * Autor: Nerildo Viana;
 * Licença: GNU;
 * Data: 2024/04/10;
 * Versão: v1.0;
*/
// Criando Objeto para manipular a matriz dentro do JS
// Criar uma função para o Objeto - matrizGrupo
// Esta função só será ativa quando passas as instancias: 
// codigo | nome | dataNascimento
function matrizGrupo(codigo,nome,dataNascimento){
    // O objeto irá ser ele mesmo "this" +  a instancia e recebe a variavel
    this.codigo = codigo;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
}
// Criar a matriz de manipulação "dados" e a variavel de controle de linha "i"
let dados = new Array(); //OU let dados = [];
let i = 0;
// Criar as variaveis de entrada
let codigo, nome, dataNascimento;
do{
    // Recebendo os dados: codigo, nome, dataNascimento
    codigo = i + 1;
    nome = prompt("Digite o nome:");
    dataNascimento = prompt("Digite a data de nascimento");
    // Gravando os dados na matriz com uso do objeto
    dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
    // Incremento de 1 na variavel de controle "i"
    i++;
    resp = parseInt(prompt("Cadastar outra pessoa:\n(1) - sim.\n(2) - não."))
}while(resp == 1)
/*
codigo = 2;
nome = "Anderson";
dataNascimento = "11/04/2023";
dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
i++;
codigo = 3;
nome = "Antony";
dataNascimento = "10/04/1990";
dados[i] = new matrizGrupo(codigo,nome,dataNascimento);
i++;
*/
// Criar variavel para pegar a quantidade de linhas da matriz "dados"
let j = dados.length;
// Criar uma função "exibaDados" para impressão da matriz de uma tabela em html
function exibaDados(){
    let dataGrid;
    dataGrid = 
    "<table><tr><td>Código</td><td>Nome</td>"+
    "<td>Data de Nascimento</td></tr>";
    // Loop de repetição para carregar as linhas da matriz
    for(i=0;i<j;i++){
        dataGrid += ("<tr><td>" + dados[i].codigo + "</td>");
        // Outra forma de atriubir o valor dele mesmo + o proximo 
        dataGrid += ("<td>" + dados[i].nome + "</td>");
        dataGrid += ("<td>" + dados[i].dataNascimento + 
        "</td></tr>");
    }
    dataGrid += "</table>";

    let resp = document.getElementById("result");
    // Inserindo o dataGrid na resp para imprimir no HTML
    resp.innerHTML = dataGrid;
}
console.log(dados)
