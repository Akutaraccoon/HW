
// // Задача 4



// // Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(num) {
  if( num % 2 !== 0){
    return "odd";
  }else{
    return "even";
  };
}
console.log(even_or_odd(4))