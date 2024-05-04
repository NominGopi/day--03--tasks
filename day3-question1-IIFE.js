// 1).Do the below programs in IIFE function.

//    a. Print odd numbers in an array

(function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  //  b. Convert all the strings to title caps in a string array

  (function(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
  })(["apple", "banana", "cherry"]);

  //  c. Sum of all numbers in an array

  var sum = (function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  })([1, 2, 3, 4, 5]);
  
  console.log(sum);

  //  d. Return all the prime numbers in an array

  var primes = (function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var isPrime = true;
      for (var j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime && arr[i] !== 1) {
        result.push(arr[i]);
      }
    }
    return result;
  })([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  console.log(primes);

  //  e. Return all the palindromes in an array

  var palindromes = (function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var reversed = arr[i].split("").reverse().join("");
      if (arr[i] === reversed) {
        result.push(arr[i]);
      }
    }
    return result;
  })(["level", "hello", "radar", "world"]);
  
  console.log(palindromes);

  //  f. Return median of two sorted arrays of the same size.

  var median = (function(arr1, arr2) {
    var merged = arr1.concat(arr2).sort(function(a, b) {
      return a - b;
    });
    var len = merged.length;
    if (len % 2 === 0) {
      console.log((merged[len / 2 - 1] + merged[len / 2]) / 2);
    } else {
      console.log(merged[Math.floor(len / 2)]);
    }
  })([1, 3, 5], [2, 4, 6]);

  // g. Remove duplicates from an array

  var uniqueArray = (function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    console.log(result);
  })([1, 2, 2, 3, 4, 4, 5]);

  // h. Rotate an array by k times

  var rotateArray = (function(arr, k) {
    k = k % arr.length;
    var rotated = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotated);
  })([1, 2, 3, 4, 5], 2);
