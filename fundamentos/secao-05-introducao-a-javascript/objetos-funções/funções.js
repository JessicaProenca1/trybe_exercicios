// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma(a, b) {
  return a + b;
}
console.log(soma(5, 2));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero(a, b) {
  if (a > b) {
    return a + ' é maior que ' + b;
  }
  else if (a < b) {
    return b + ' é maior que ' + a;
  }
  else {
    return 'os numeros são iguais';
  }
}
console.log(maiorNumero(15, 15));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function maiorNumeroEntre3(a, b, c) {
  if (a > b && a > c) {
    return a + ' é maior que ' + b + ' e ' + c;
  }
  else if (b > a && b > c) {
    return b + ' é maior que ' + a + ' e ' + c;
  }
  else {
    return c + ' é maior que ' + a + ' e ' + b;
  }
}
console.log(maiorNumeroEntre3(15, 15, 8));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
function positivoNegativo(a) {
  if (a > 0) {
    return 'positive';
  }
  else if (a < 0) {
    return 'negative';
  }
  else {
    return 'zero';
  }
}
console.log(positivoNegativo(0));
// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
function triangulo(a,b,c){
  if (a + b + c == 180){
    return 'é um triangulo';
  }
  else {
    return 'ERRO!! Angulos invalidos!'
  }
}
console.log(triangulo(90,40,50));

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara // verificaPalindrome('arara') // Retorno esperado: true // verificaPalindrome('desenvolvimento') // Retorno esperado: false

function verificaPalindrome (palavra) {
  let contrario = palavra.split('').reverse().join('');
  if (palavra == contrario){
    return 'é um palindromo'
  }
  else {
    return 'não é um palindromo'
  }
}

console.log(verificaPalindrome('pedrita'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function maiorNumeroInteiro (numerosInteiros){  

  return Math.max.apply(null,numerosInteiros);
}

let array2 = [2, 3, 6, 7, 10, 1];

console.log(maiorNumeroInteiro(array2));


// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function maiorNumeroInteiro (numerosInteiros){  

  return Math.min.apply(null,numerosInteiros);
}

let array = [2, 4, 6, 7, 10, 0, -3];

console.log(maiorNumeroInteiro(array));


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

let nomes2 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorCaracter (){
  let ;
  return ;

}
console.log(maiorCaracter());

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false