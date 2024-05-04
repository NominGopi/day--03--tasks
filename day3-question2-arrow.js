//  2). Do the below programs in arrow functions.

//   a. Print odd numbers in an array

var printOddNumbers = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  //  b. Convert all the strings to title caps in a string array

  var convertToTitleCaps = arr => {
    arr.forEach(str => {
      console.log(str.charAt(0).toUpperCase() + str.slice(1));
    });
  };
  
  convertToTitleCaps(["apple", "banana", "cherry"]);

  //  c. Sum of all numbers in an array

  var sumOfNumbers = arr => {
    var sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
  };
  
  sumOfNumbers([1, 2, 3, 4, 5]);

  //  d. Return all the prime numbers in an array

  var getPrimeNumbers = arr => {
    var primes = arr.filter(num => {
      for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num !== 1;
    });
    console.log(primes);
  };
  
  getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]);

  //  e.  Return all the palindromes in an array

  var getPalindromes = arr => {
    var palindromes = arr.filter(str => {
      var reversed = str.split("").reverse().join("");
      return str === reversed;
    });
    console.log(palindromes);
  };
  
  getPalindromes(["level", "hello", "radar", "world"]);
