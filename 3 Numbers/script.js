const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
  const userInput = prompt("Enter a positive integer:");
  const number = parseInt(userInput);
  
  console.log(`Is ${number} a prime number? ${isPrime(number)}`);