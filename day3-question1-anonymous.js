// 1). Do the below programs in anonymous function
   
//   a. Print odd numbers in an array

var printOddNumbers = function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  //  b. Convert all the strings to title caps in a string array

  var convertToTitleCaps = function(arr) {
    arr.forEach(function(str) {
      console.log(str.charAt(0).toUpperCase() + str.slice(1));
    });
  };
  
  convertToTitleCaps(["apple", "banana", "cherry"]);

  // c. Sum of all numbers in an array

  var sumOfNumbers = function(arr) {
    var sum = arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
    console.log(sum);
  };
  
  sumOfNumbers([1, 2, 3, 4, 5]);

  // d. Return all the prime numbers in an array

  var getPrimeNumbers = function(arr) {
    var primes = arr.filter(function(num) {
      for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num !== 1;
    });
    console.log(primes);
  };
  
  getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // e. Return all the palindromes in an array

  var getPalindromes = function(arr) {
    var palindromes = arr.filter(function(str) {
      var reversed = str.split("").reverse().join("");
      return str === reversed;
    });
    console.log(palindromes);
  };
  
  getPalindromes(["level", "hello", "radar", "world"]);

  // f. Return median of two sorted arrays of the same size

  var getMedian = function(arr1, arr2) {
    var merged = arr1.concat(arr2).sort(function(a, b) {
      return a - b;
    });
    var len = merged.length;
    if (len % 2 === 0) {
      console.log((merged[len / 2 - 1] + merged[len / 2]) / 2);
    } else {
      console.log(merged[Math.floor(len / 2)]);
    }
  };
  
  getMedian([1, 3, 5], [2, 4, 6]);

  // g. Remove duplicates from an array

  var removeDuplicates = function(arr) {
    var uniqueArray = arr.filter(function(item, index, array) {
      return array.indexOf(item) === index;
    });
    console.log(uniqueArray);
  };
  
  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

  // h. Rotate an array by k times

  var rotateArray = function(arr, k) {
    for (var i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    console.log(arr);
  };
  
  rotateArray([1, 2, 3, 4, 5], 2);
