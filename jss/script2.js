/*Esse código permite ao usuário inserir oa dimensões de uma matriz e os valores para cada posição das matrizes matriz A e matriz B. 
Em seguida, ele chama a função subtrairMatrizes para obter a matriz resultante, que é a subtração das duas matrizes.*/

// Solicitando ao usuário as dimensões da matriz //
var linhas = parseInt(prompt("Informe o número de linhas da matriz:"));
var colunas = parseInt(prompt("Informe o número de colunas da matriz:"));

// Inicializando as matrizes //
let matriz1 = new Array();
let matriz2 = new Array();

// Solicitando os valores da primeira matriz //
document.write("<strong>Matriz A:</strong><br>");//elemento "strong" serve para deixar o texto em negrito//
for (var i = 0; i < linhas; i++) {
  matriz1[i] = [];
  for (var j = 0; j < colunas; j++) {
    matriz1[i][j] = parseInt(prompt("Informe o valor da posição [" + i + "][" + j + "] da primeira matriz:"));
    document.write(matriz1[i][j] + " ");
  }
  document.write("<br>");
}

document.write("<br>");

// Solicitando os valores da segunda matriz //
document.write("<strong>Matriz 2:</strong><br>");
for (var i = 0; i < linhas; i++) {
  matriz2[i] = [];
  for (var j = 0; j < colunas; j++) {
    matriz2[i][j] = parseInt(prompt("Informe o valor da posição [" + i + "][" + j + "] da segunda matriz:"));
    document.write(matriz2[i][j] + " ");
  }
  document.write("<br>");
}

document.write("<br>");

/*A função subtrairMatrizes percorre cada posição das matrizes de entrada (matriz A e matriz B) e calcula a soma dos valores correspondentes. 
Os resultados são armazenados na matriz subtrai.*/
function subtrairMatrizes(matriz1, matriz2) {
  var subtrai = new Array();

  for (var i = 0; i < matriz1.length; i++) {
    var linha = new Array();
    for (var j = 0; j < matriz1[i].length; j++) {
      linha.push(matriz1[i][j] - matriz2[i][j]);
    }
    subtrai.push(linha);
  }

  return subtrai;
}

var resultado = subtrairMatrizes(matriz1, matriz2);

/*Após calcular a matriz resultante, utiliza-se document.write() para exibir as matrizes matriz A, matriz B e a matriz resultante 
na página HTML. O texto é formatado usando o elemento "strong", que como já expliquei, serve para deixá-lo em negrito, e cada valor é exibido
separado por um espaço. Cada linha é quebrada utilizando o código <br> para exibir as matrizes de forma organizada.*/
document.write("<strong>Matriz Resultante:</strong><br>");
for (var i = 0; i < resultado.length; i++) {
  for (var j = 0; j < resultado[i].length; j++) {
    document.write(resultado[i][j] + " ");
  }
  document.write("<br>");
}
