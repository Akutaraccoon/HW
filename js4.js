
// // Задача 2

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

let x = 9;

function isInteger(x) {
  // return (x ^ 0) === x;
  if (Math.ceil(x) - x > 0){
  	return false;
  }else{
  	return true;
  }

};



function factorial(x){
    let num = 1;
    while(x){
        num *= x--;
    }
    return num;
};

let y = factorial(x - 1);



let number = ((y + 1) / (x * x));


console.log(isInteger(number));
