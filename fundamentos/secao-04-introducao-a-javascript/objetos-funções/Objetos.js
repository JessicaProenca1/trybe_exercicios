let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}

console.log(player);
console.log(player['name']);
console.log(player['medals']['golden']);

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (key in names){
  console.log('Olá, ' + names[key] + '!');
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
  console.log(key, car[key])
}