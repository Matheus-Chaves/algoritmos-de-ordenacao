/*
  * Exercício:
    - Construir o algoritmo de ordenação chamado Merge Sort, que consiste
    em "dividir para conquistar", utilizando o array de objetos no arquivo
    array.js para ordenar de forma crescente com base no preço dos itens.
  * Resolução:
    - A resolução foi dividida em duas etapas:
      1. Foi criada uma função recursiva para dividir a lista de itens em
      duas listas menores (sempre dividindo ao meio);
      2. Foi criada uma função que recebe duas listas e as ordena com base
      no atributo "preço", em ordem crescente.

    - Após executar a etapa 1, as duas listas menores são enviadas para a
    função da etapa 2 e organizadas;
    - Esse processo se repete até que se tenha duas listas (a lista original
      dividida ao meio) ordenadas;
    - Por fim, estas duas listas serão comparadas na função da etapa 2 e uma
    nova lista com todos os itens organizados será criada.
*/

const listaLivros = require("./array");

function mergeSort(array) {
  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio));
    const parte2 = mergeSort(array.slice(meio, array.length));
    array = ordena(parte1, parte2);
  }
  return array;
}

function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  const resultado = [];

  while (
    posicaoAtualParte1 < parte1.length &&
    posicaoAtualParte2 < parte2.length
  ) {
    let produtoAtualParte1 = parte1[posicaoAtualParte1];
    let produtoAtualParte2 = parte2[posicaoAtualParte2];

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1);
      posicaoAtualParte1++;
    } else {
      resultado.push(produtoAtualParte2);
      posicaoAtualParte2++;
    }
  }

  return resultado.concat(
    posicaoAtualParte1 < parte1.length
      ? parte1.slice(posicaoAtualParte1)
      : parte2.slice(posicaoAtualParte2)
  );
}

// const t0 = performance.now();
console.log(mergeSort(listaLivros));
// const t1 = performance.now();
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
