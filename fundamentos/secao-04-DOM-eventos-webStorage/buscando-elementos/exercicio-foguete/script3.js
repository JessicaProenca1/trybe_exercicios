// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
let classBody = document.querySelector('body');
classBody.className = ('classBody'); // criado a class pro body
let tagH1 = document.createElement('h1');
let textH1 = document.createTextNode('Exercício - JavaScript DOM');
tagH1.appendChild(textH1);
classBody.appendChild(tagH1);

// Adicione a tag main com a classe main-content como filho da tag body;
// let paiBody = document.querySelector('.classBody');
// let addMain = document.createElement('main');
// paiBody.appendChild(addMain);
// addMain.className = ('main-content');

let paiBody = document.getElementsByClassName('classBody')[0];
let addMain = document.createElement('main');
paiBody.appendChild(addMain);
addMain.className = ('main-content');

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
var paiMain = document.getElementsByClassName('main-content')[0];
let addSection = document.createElement('section');
paiMain.appendChild(addSection);
addSection.className = ('center-content');

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paiSection = document.getElementsByClassName('center-content')[0];
let addTagP = document.createElement('p');
paiSection.appendChild(addTagP);
addTagP.innerText = ('Tentando fazer os exercícios');


// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
var paiMain = document.getElementsByClassName('main-content')[0];
let addSection2 = document.createElement('section');
paiMain.appendChild(addSection2);
addSection2.className = ('left-content');

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
var paiMain = document.getElementsByClassName('main-content')[0];
let addSection3 = document.createElement('section');
paiMain.appendChild(addSection3);
addSection3.className = ('right-content');

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
var paiSectionLeftContent = document.getElementsByClassName('left-content')[0];
let imagem = document.createElement('img');
img["src"] = 'https://picsum.photos/200';
paiSectionLeftContent.appendChild(imagem);
imagem.className = ('small-image');




// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.