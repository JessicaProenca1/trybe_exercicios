// // 1) Percorra o array imprimindo todos os valores nele contidos com a função console.log(); ok
// // 2) Some todos os valores contidos no array e imprima o resultado; ok 
// // 3) Calcule e imprima a média aritmética dos valores contidos no array;
// // 4) Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
// // 5) Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// // 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
// // 7) Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// // 8) Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// 9) Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

console.log('exercicio 1');
console.log('');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [4, 6];


for (var numeros_impressos = 0; numeros_impressos < numbers.length; numeros_impressos += 1) {
  console.log(numbers[numeros_impressos]);
}
console.log('');
console.log('exercicio 2');
console.log('');

var somaTotal = 0
for (var i = 0; i < numbers.length; i += 1) {
  somaTotal += numbers[i];
}
console.log('A soma da array é ' + somaTotal);

console.log('');
console.log('exercicio 3');
console.log('');

var media = somaTotal / numbers.length;

console.log(media);

console.log('');
console.log('exercicio 4');
console.log('');

if (media > 20) {
  console.log('valor maior que 20');
}
else {
  console.log('valor menor ou igual a 20');
}

console.log('');
console.log('exercicio 5');
console.log('');

var maior_numero = numbers[0]; // 
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior_numero) {
    maior_numero = numbers[index];
  }
}
console.log(maior_numero);

console.log('');
console.log('exercicio 6');
console.log('');

var impar = [];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    impar.push(numbers[index]);
  }
}
console.log(impar);

if (impar.length == 0) {
  console.log('nenhum valor ímpar encontrado');
}
else {
  console.log('tem ' + impar.length + ' numeros impares na array');
}

console.log('');
console.log('exercicio 7');
console.log('');

var menor_numero = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor_numero) {
    menor_numero = numbers[index];
  }
}
console.log(menor_numero);

console.log('');
console.log('exercicio 8');
console.log('');

var array1ate25 = [];

for (index = 1; index <= 25; index += 1) {
  array1ate25.push(index);
}
console.log(array1ate25);

console.log('');
console.log('exercicio 9');
console.log('');

for (let index = 0; index < array1ate25.length; index += 1) {
  console.log(array1ate25[index] / 2);
}
