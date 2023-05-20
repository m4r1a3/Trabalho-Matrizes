/*O código solicita ao usuário as dimensões de uma matriz (número de linhas e colunas) e, em seguida, pede para o usuário
informar os valores para preencher duas matrizes. Após obter os valores, o código calcula as 
transpostas das duas matrizes.*/

/*Solicita ao usuário o número de linhas da matriz e armazena na variável "linhas";
Solicita ao usuário o número de colunas da matriz e armazena na variável "colunas".*/
var linhas = parseInt(prompt("Informe o número de linhas da matriz: "));
var colunas = parseInt(prompt("Informe o número de colunas da matriz: "));

/*Cria duas matrizes vazias, matriz1 e matriz2, representadas por arrays vazios.*/
let matriz1 = new Array();
let matriz2 = new Array();

/*Solicita ao usuário os valores para preencher a matriz1, percorrendo cada linha e coluna com os laço de repetição "for".*/
document.write("<strong>Matriz A:</strong><br>");
for (var i = 0; i < linhas; i++) {
  matriz1[i] = [];//Armazena os valores digitados pelo usuário na primeira matriz (matriz1).//
  for (var j = 0; j < colunas; j++) {
    matriz1[i][j] = parseInt(prompt("Informe o valor da posição [" + i + "][" + j + "] da primeira matriz:"));
    document.write(matriz1[i][j] + " ");//Exibe os valores na página HTML usando "document.write".//
  }
  document.write("<br>");
}

document.write("<br>");

/*Solicita ao usuário os valores para preencher a matriz2, percorrendo cada linha e coluna com os laço de repetição "for".*/
document.write("<strong>Matriz B:</strong><br>");
for (var i = 0; i < linhas; i++) {
  matriz2[i] = [];//Armazena os valores digitados pelo usuário na primeira matriz (matriz2).//
  for (var j = 0; j < colunas; j++) {
    matriz2[i][j] = parseInt(prompt("Informe o valor da posição [" + i + "][" + j + "] da segunda matriz:"));
    document.write(matriz2[i][j] + " ");//Exibe os valores na página HTML usando "document.write".//
  }
  document.write("<br>");
}

document.write("<br>");

/*Define a função "transposta" que recebe uma matriz como parâmetro e calcula a transposta dessa matriz.*/
function transposta(matriz) {
  var transposta = [];//Dentro da função transposta, cria um array vazio (transposta), para armazenar a matriz transposta.//
  for (var i = 0; i < colunas; i++) {//Utiliza os laços de repetição "for" aninhados para percorrer os elementos da matriz original e atribuir //
    transposta[i] = [];              //os elementos correspondentes à matriz transposta.//
    for (var j = 0; j < linhas; j++) {
      transposta[i][j] = matriz[j][i];
    }
  }
  return transposta;//Retorna a matriz transposta.//
}

var Matriz1Transposta = transposta(matriz1);//Chama a função transposta passando a primeira matriz, matriz1,//
                                           //como argumento, e armazena o resultado na variável "Matriz1Transposta."//

document.write("<strong>Matriz A Transposta: </strong><br>");
for (var i = 0; i < Matriz1Transposta.length; i++) {
  for (var j = 0; j < Matriz1Transposta[i].length; j++) {
    document.write(Matriz1Transposta[i][j] + " ");//Exibe a matriz transposta da primeira matriz na página HTML usando "document.write".//
  }
  document.write("<br>");
}
document.write("<br><br><br>");

// Função para calcular a matriz2 transposta
var Matriz2Transposta = transposta(matriz2);//Chama a função transposta passando a segunda matriz, matriz2,//
                                           //como argumento, e armazena o resultado na variável "Matriz2Transposta."//


document.write("<strong>Matriz B Transposta: </strong><br>");
for (var i = 0; i < Matriz2Transposta.length; i++) {
  for (var j = 0; j < Matriz2Transposta[i].length; j++) {
    document.write(Matriz2Transposta[i][j] + " ");//Exibe a matriz transposta da primeira matriz na página HTML usando "document.write".//
  }
  document.write("<br>");
}
document.write("<br><br><br>");
