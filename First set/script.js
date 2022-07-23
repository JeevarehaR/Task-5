//Do the below programs in anonymous function & IIFE

//a.Print odd numbers in an array
let a=[];
for(let i=0; i<10; i++){
    if(i%2!=0){
        a.push(i);
    }
}
console.log(`The odd numbers between o and 10 are ${a}`);

//b.Convert all the strings to title caps in a string array
let str = "abcdisjjfjkfjoewekkoojvj is gibberish";
console.log(`The title caps string array of ${str} is ${str.toUpperCase()}`);

//c.Sum of all numbers in an array
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(`The sum of all numbers in array [${arr}] is ${sum}`);

//d.Return all the prime numbers in an array
function primeArr(arr) {
    function isPrime(N){ 
      var result = false; 
      for(var n = N - 1; n > 1; n--){ 
          result = (N % n === 0) + result; 
      } 
      if(result === 0 && N > 1){ 
        return true; 
      }return false; 
    }
    var newArr = [];  
    for(var n=0; n<arr.length; n++){ 
      if(isPrime(arr[n])){ 
        newArr.push(arr[n]); 
      } 
    }   
    console.log(newArr); 
}
primeArr([1,2,3,4,5,,7,8,,9,14]);

//e.Return all palindromes in an array
function palindromes(inp){
    var len = inp.length;
    var mid = Math.floor(len / 2);
    var flag = true;
    for (var i = 0; i < mid; i++){
        if(inp[i] !== inp[len-1-i]){
            flag = false;
        }
    }
    if(flag == true){console.log(`${inp} is Palindrome`);}
    else{console.log(`${inp} is not Palindrome`);}
}
palindromes("jiki");

//f.Return median of two sorted arrays of the same size
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2){console.log("Median:"+getMedian(ar1,ar2,n1));}
else{console.log("Unequal size");}
function getMedian(ar1, ar2, n)
{
    var i = 0;
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}


//g.Remove  duplicates from an array
let chars = ['A', 'B', 'A', 'C', 'B'];  
let res = [...new Set(chars)];
console.log(res);

//h.Rotate an array by k times
function RightRotate(a, n, k)
{
    let resul = [];
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            resul.push(a[n + i - k]);
        }
        else {
            resul.push((a[i - k]));
        }
    }
    console.log(resul);
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
RightRotate(Array, N, K);
