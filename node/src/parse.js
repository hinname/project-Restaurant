//Criando funções para selecionar os elementos id e img src no HTTP

function getElement(id) {
  return document.getElementById(id);
}

function getElementimg(id) {
  return document.getElementById(id).src;
}

//Buscando as informações a serem inseridas no json (também pode ser uma URL)
fetch('info.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

//Criando a função para mudar o conteúdo do elemento id no HTTP. A chamada é feita pelo nome no JSON.
function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        getElement('nome'+i).innerHTML = data[i].nome;
        getElementimg('imagem'+i).innerHTML = data[i].imagem;
        getElement('ingredientes'+i).innerHTML = data[i].ingredientes;
        getElement('preco'+i).innerHTML = data[i].preco;
    }

}
