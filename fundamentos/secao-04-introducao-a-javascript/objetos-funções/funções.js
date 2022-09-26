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
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.