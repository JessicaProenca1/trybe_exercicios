function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);


const test = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(elseScope);
  }
}
test(false);



// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// const numbers2 = [4, 2, 5, 1, 3];
// numbers2.sort((a, b) => b - a);
// console.log(numbers2);

let numbers = [0, 30 , 2, 100, 10, 50, 1];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);