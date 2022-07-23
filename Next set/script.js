//DO the below programs in arrow functions

//a.print odd numbers in an array
let odd = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    let res = arr.filter(n => n%2!=0);
    console.log(res);
}
odd();

//b.convert all the strings to title caps in a string array
let caps = () => {
    const str =  "my name is jiki";
    let capitalized = str.toUpperCase();
    console.log(capitalized);
}
caps();

//c.Sum of all numbers in an array
let printsum = ()=>{
    const arr = [3,5,7,9,11,23,31];
    let sum = arr.reduce((a,b)=>a+b,0);
    console.log(sum);
}
printsum();

//d.Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10,17];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const PrimeArr= newArray.filter(e => isPrime(e));
console.log(PrimeArr);

//e.Return all the palindromes in an array
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);
console.log(getAllPalindromes(["wow", "noon","tomato","deed"]));














