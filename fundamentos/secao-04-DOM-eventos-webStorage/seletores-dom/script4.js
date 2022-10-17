/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/
const tagP = document.getElementsByTagName("p")[1];
tagP.innerText = 'Tenho uma dog chamada Pedrita Maria';

function trybe() {
  let verdeTrybe = document.getElementsByClassName('main-content')[0];
  verdeTrybe.style.background = "rgb(76,164,109)";
}
trybe();

function redToWhite() {
  let red = document.getElementsByClassName('center-content')[0];
  red.style.backgroundColor = '#fff';
}
redToWhite();

function correcao(){
  let title = document.getElementsByClassName('title')[0];
title.innerText = 'Exercício JavaScript';
}
correcao();

function upperCase(){
  let tag = document.getElementsByTagName("p")[0];
  tag.innerHTML = tag.innerHTML.toUpperCase();
}
upperCase();

function consolePrint(){
  let tagP = document.getElementsByTagName("p");
  for (i in tagP){
    console.log(tagP[i]);
  }
}
consolePrint();

