/*
  * Exercício:
    - Duas listas já ordenadas estão no arquivo arrays.js e é necessário
    criar uma só lista que junte as duas e as ordene em ordem crescente
    de acordo com o preço dos produtos.
  * Resolução:
    - Utilizou-se uma função que recebe as duas listas como parâmetro e
    vai colocando um elemento de cada vez na lista final, sempre ordenando
    pelo preço antes de colocar o elemento nela.
*/

const { edGalho, edFolha } = require("./arrays");

function juntaListas(lista1, lista2) {
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let atual = 0;

  while (
    posicaoAtualLista1 < lista1.length &&
    posicaoAtualLista2 < lista2.length
  ) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }

    atual++;
  }

  //spread operator é melhor para listas pequenas do que concat().
  return posicaoAtualLista1 === lista1.length
    ? //lista 1 acabou, inserindo lista 2 no array...
      [...listaFinal, ...lista2.slice(posicaoAtualLista2)]
    : //lista 2 acabou, inserindo lista 1 no array...
      [...listaFinal, ...lista1.slice(posicaoAtualLista1)];
}

console.log(juntaListas(edGalho, edFolha));
