// const fatorial = (n) => {
//   if (n > 1) {
//     return n * fatorial(n - 1)
//   }
//   return n
// }
// console.log(fatorial(5));


const fatorial2 = (m) => 
  m > 1 ? m * fatorial2(m - 1) : m

console.log(fatorial2(5));