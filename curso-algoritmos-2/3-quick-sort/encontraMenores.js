/*
  Utilizando um array de objetos com as propriedades "titulo" e "preço", pegamos
  o elemento do meio como pivô e procuramos a quantidade de elementos com preço
  menor que o do pivô. Após isso, coloca-se o pivô no índice igual a quantia de
  elementos achados anteriormente e esses itens atrás do pivô.
    Exemplo, sendo p = pivô, x = elemento, m = preço menor que pivô:
      Tamanho do array: 8                       [x, x, x, x, x, x, x, x]
      Índice do pivô: 4                         [x, x, x, x, p, x, x, x]
      Elementos com preço menor que o pivô: 6   [m, m, m, x, p, m, m, m]
      Novo índice do pivô: 6                    [m, m, m, m, m, m, p, x]
*/
const listaLivros = require("./array");

function encontraMenores(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }

  trocaLugar(array, array.indexOf(pivo), menores);
  return array;
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  encontraMenores(pivo, array);
  let valoresMenores = 0;

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoresMenores);
      valoresMenores++;
    }
  }

  return array;
}

//console.log(divideNoPivo(listaLivros));
// console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = trocaLugar;
