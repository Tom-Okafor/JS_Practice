// check if a number is a prime or not

function checkForPrimeNumber(number){

  let divisors= 0;
  let result;
  for (let i = 1; i <= number; i++){
    if (number % i == 0){
      divisors++
    }
  }
  if (divisors == 2){
    result = "number is a prime";
  } else{
    result =  "not a prime";
  }
   
   return result
}

console.log(checkForPrimeNumber(13))