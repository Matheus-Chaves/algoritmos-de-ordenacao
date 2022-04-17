/*
  * Exercício:
    - Construir o algoritmo de ordenação chamado Quick Sort, que consiste em
    ordenar a lista de acordo com um elemento central (o pivô) - e mais duas
    marcações - uma a esquerda e outra a direita do índice do pivô.
    - Os elementos à esquerda do pivô possuem valores menores que ele, enquanto
    os da direita possuem valores maiores.
    - Utiliza-se o array de objetos no arquivo array.js, para ordenar de forma
    crescente com base no preço dos itens.
  * Resolução:
    - A resolução foi dividida em duas etapas:
      1. Foi criada uma função recursiva "quickSort", que recebe a lista, a
      marcação esquerda e direita (menor e maior índice da lista);
      2. Foi criada uma função "particiona" que recebe listas e as ordena com base
      no atributo "preço", em ordem crescente.

    - Inicialmente tem-se os índices: pivô = 5, esquerda = 0, direita = 10. Isso
    fará com que o array separe valores menores que o do pivô na esquerda,
    enquanto coloca os maiores na direita, trocando-os de lugar.
    - Os valores da esquerda aumentam enquanto da direita decrementam. Isso irá
    ocorrer até que esquerda <= direita.
    - Após isso ocorrer, forma-se um novo array que vai da posição atual do
*/
const listaLivros = require("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {
  let indiceAtual = particiona(array, esquerda, direita);
  if (esquerda < indiceAtual - 1) {
    quickSort(array, esquerda, indiceAtual - 1);
  }
  if (indiceAtual < direita) {
    quickSort(array, indiceAtual, direita);
  }
  return array;
}

function particiona(array, esquerda, direita) {
  //console.log("array", array);
  //console.log("esquerda, direita", esquerda, direita);
  let pivo = array[Math.floor((esquerda + direita) / 2)];
  //console.log("pivo:", pivo.titulo);
  let atualEsquerda = esquerda; //0
  let atualDireita = direita; //10

  while (atualEsquerda <= atualDireita) {
    while (array[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++;
    }

    while (array[atualDireita].preco > pivo.preco) {
      atualDireita--;
    }

    if (atualEsquerda <= atualDireita) {
      trocaLugar(array, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
