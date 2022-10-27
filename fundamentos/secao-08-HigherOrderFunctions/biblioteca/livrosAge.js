const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function nameAndAge() {
  //map primeiro depois o sort
  const arrayAge = books.map((book) => ({
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name, 
  }))
  arrayAge.sort((a,b) => a.age - b.age)
  return arrayAge
}
console.log(nameAndAge());

function fantasyOrScienceFiction() {
 return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia') 
}
console.log(fantasyOrScienceFiction());
console.log('-----------------------------');

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
function oldBooksOrdered() {
  const books60Years = books.filter((book) => 2022 - book.releaseYear >= 60)
  return books60Years.sort((a, b) => a.releaseYear - b.releaseYear)
}
console.log(oldBooksOrdered());
console.log('-----------------------------');

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
  //filter
  const authorFicORFantasy = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  const onlyAuthor = authorFicORFantasy.map((autor) => autor.author.name)
  
  //sort
  return onlyAuthor.sort((a, b) => a - b)
}
console.log(fantasyOrScienceFictionAuthors());