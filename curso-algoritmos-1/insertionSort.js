const livros = require("./listaLivros");

function insertionSort(lista) {
  //começa-se com atual=1, pois a comparação irá começar no segundo item da lista
  for (let atual = 1; atual < lista.length; atual++) {
    let indiceEmAnalise = atual;
    let indiceAnterior = indiceEmAnalise - 1;

    while (lista[indiceEmAnalise].preco < lista[indiceAnterior].preco) {
      let itemAnalise = lista[indiceEmAnalise];
      let itemAnterior = lista[indiceAnterior];

      lista[indiceEmAnalise] = itemAnterior;
      lista[indiceAnterior] = itemAnalise;

      indiceEmAnalise--;
      indiceAnterior--;
    }
  }
  console.log(lista);
}

insertionSort(livros);
