// Function to calculate the square root of the sum of squares
function calcSquareRootOfSumOfSqrs(numbers) {
    const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }
  
  // Function to display the square root of the sum of squares
  function displaySqrRootOfSumOfSqrs(numbers) {
    const result = calcSquareRootOfSumOfSqrs(numbers);
    console.log(`The square root of the sum of squares is: ${result}`);
  }
  
  // Test the function
  const numbers = [3, 4, 5];
  displaySqrRootOfSumOfSqrs(numbers);