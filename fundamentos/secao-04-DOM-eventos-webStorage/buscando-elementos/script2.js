// Crie um irmão para elementoOndeVoceEsta.
let arrayIrmao3 = ['irmao1', 'irmao2'];
let irmao3 = document.getElementById("elementoOndeVoceEsta").parentElement;

for (let i in arrayIrmao3) {
  let paragrafoIrmaoItem = arrayIrmao3[i];

  let paragrafoIrmao = document.createElement('section');
  paragrafoIrmao.innerText = paragrafoIrmaoItem;
  
  irmao3.appendChild(paragrafoIrmao);
}

// Crie um filho para elementoOndeVoceEsta.
let arrayIrmao = ['babababababab', 'lalalalala'];
let irmao = document.getElementById("elementoOndeVoceEsta");

for (let i in arrayIrmao) {
  let paragrafoIrmaoItem = arrayIrmao[i];

  let paragrafoIrmao = document.createElement('p');
  paragrafoIrmao.innerText = paragrafoIrmaoItem;
  
  irmao.appendChild(paragrafoIrmao);
}

// Crie um filho para primeiroFilhoDoFilho.
let arrayIrmao2 = ['rarararara'];
let irmao2 = document.getElementById("elementoOndeVoceEsta").firstElementChild;

for (let i in arrayIrmao2) {
  let paragrafoIrmaoItem = arrayIrmao2[i];

  let paragrafoIrmao = document.createElement('p');
  paragrafoIrmao.innerText = paragrafoIrmaoItem;
  
  irmao2.appendChild(paragrafoIrmao);
}
// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = irmao2.parentElement.nextElementSibling;
console.log(terceiroFilho);
