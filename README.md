### 1.Date Object Ans: 


``` 
// Function to get the day of the week for a given date
function getDayOfWeek(dateString) {
  const daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

// Function to display the day of the week for the current date
function displayCurrentDayOfWeek() {
  const currentDate = new Date();
  const currentDayOfWeek = getDayOfWeek(currentDate);
  console.log(`The day of the week for today is ${currentDayOfWeek}.`);
}

// Test the Functions
const inputDate = '2023-06-18';
const dayOfWeek = getDayOfWeek(inputDate);
console.log(`The day of the week for ${inputDate} is ${dayOfWeek}.`);

displayCurrentDayOfWeek();
```

### 2.Math Object Ans:

```
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

```

### 3. Numbers Ans: 

```

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


```

4. Window Object Ans: 

```
const openNewWindow = (url, width, height) => {
  const windowFeatures = `width=${width},height=${height}`;
  window.open(url, '_blank', windowFeatures);
};

// Now call the function to open the new window
openNewWindow("https://www.example.com", 800, 600);

```

### 5.Navigator Object Ans: 

```
const getBrowserInfo = () => {
  const browser = navigator.userAgent;
  let browserName;
  let browserVersion;

  if (browser.indexOf('Firefox') !== -1) {
    browserName = 'Mozilla Firefox';
    browserVersion = browser.split('Firefox/')[1]?.split(' ')[0] || 'Unknown';
  } else if (browser.indexOf('Chrome') !== -1 && !navigator.brave) {
    if (browser.indexOf('Edg') !== -1) {
      browserName = 'Microsoft Edge';
      browserVersion = browser.split('Edg/')[1]?.split(' ')[0] || 'Unknown';
    } else {
      browserName = 'Google Chrome';
      browserVersion = browser.split('Chrome/')[1]?.split(' ')[0] || 'Unknown';
    }
  } else if (browser.indexOf('Safari') !== -1) {
    browserName = 'Apple Safari';
    browserVersion = browser.split('Version/')[1]?.split(' ')[0] || 'Unknown';
  } else if (browser.indexOf('MSIE') !== -1 || browser.indexOf('Trident/') !== -1) {
    browserName = 'Internet Explorer';
    browserVersion = browser.split('MSIE ')[1]?.split(';')[0] || browser.split('rv:')[1]?.split(')')[0] || 'Unknown';
  } else if (navigator.brave) {
    browserName = 'Brave';
    browserVersion = browser.split('Chrome/')[1]?.split(' ')[0] || 'Unknown';
  } else {
    browserName = 'Unknown';
    browserVersion = 'N/A';
  }

  return {
    name: browserName,
    version: browserVersion
  };
};

// Call the function to get the browser info
const browserInfo = getBrowserInfo();
console.log(`Browser Name: ${browserInfo.name}`);
console.log(`Browser Version: ${browserInfo.version}`);

```

### 6. Geolocation Function Ans:

```
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}`);
        console.log(`Longitude: ${longitude}`);
      },
      (error) => {
        console.log('Error occurred while retrieving location:', error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};

// Call the function to retrieve the user's current location
getLocation();

```

### 7.JS Common Events- Implementing a webpage with the required functionality asked for: 

Runnging the test for the webpage function required file structure is:
    a. index.html
    b. a directory called "public", where the image(image_1.jpg, image_2.jpg) file are store,
    c. script.js
    - the code is bellow given.

## HTML File: 
```
<!DOCTYPE html>
<html>
<head>
  <title>Click, Key, and Mouse Events</title>
  <script src="script.js"></script>
</head>
<body onclick="handleClick(event)" onkeypress="handleKeyPress(event)">
  <h1>Click anywhere, press any key, and mouse over the image</h1>
  <img style="height: 300px; width: 550px;" id="myImage" src="./public/image_1.jpg"  onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)">
</body>
</html>

```

## Script File:
```
// The handleClick function retrieves the mouse coordinates (clientX and clientY) start
function handleClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    alert("Clicked at coordinates (x, y): " + x + ", " + y);
  }
  
  function handleKeyPress(event) {
    var keyCode = event.keyCode || event.which;
    alert("Pressed key with code: " + keyCode);
  }

// The handleClick function retrieves the mouse coordinates (clientX and clientY) end.

var originalImageSrc; // Variable to store the original image source

function handleMouseOver(imageElement) {
  originalImageSrc = imageElement.src; // Store the original image source
  imageElement.src = "./public/image_2.jpg";
}

function handleMouseOut(imageElement) {
  imageElement.src = originalImageSrc; // Revert back to the original image source
}
```

### 8.HTML DOM Document Ans:

Runnging the test for HTML DOM Document, here is the requreid file structure:
  a.index.html
  b.script.js

## Html Code: 

```
<!DOCTYPE html>
<html>
<head>
  <title>HTML DOM Document</title>
</head>
<body>
  <h1>HTML DOM Document</h1>
  <button id="myButton">Click Me</button>
  <p id="myParagraph">This is a paragraph.</p>

  <script src="script.js"></script>
</body>
</html>
```

## Script Code: 

```
// Get references to the button and paragraph elements
var button = document.getElementById('myButton');
var paragraph = document.getElementById('myParagraph');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Change the text content of the paragraph element
  paragraph.innerHTML = 'Button Clicked!';
});
```

### 9.JS DOM Working with Form with required Input fields:

need 2 file: 
  a. index.html
  b.script.js

## Html Code: 
```
<!DOCTYPE html>
<html>
<head>
  <title>JS DOM Working with Form Input</title>
</head>
<body>
  <h1>JS DOM Working with Form Input</h1>

  <form id="myForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <span id="nameError" class="error"></span>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <span id="emailError" class="error"></span>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
      <span id="passwordError" class="error"></span>
    </div>
    <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword">
      <span id="confirmPasswordError" class="error"></span>
    </div>
    <div>
      <input type="submit" value="Submit">
    </div>
  </form>

  <script src="script.js"></script>
</body>
</html>
```

## Script File Code: 

```
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form and error elements
    var form = document.getElementById('myForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
  
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Clear previous error messages
      nameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';
      confirmPasswordError.textContent = '';
  
      // Validate name field
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
      } else if (!/^[A-Za-z]+$/.test(nameInput.value)) {
        nameError.textContent = 'Name should contain only letters.';
      }
  
      // Validate email field
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
      }
  
      // Validate password field
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password should have a minimum length of 8 characters.';
      } else if (!/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || !/[0-9]/.test(passwordInput.value)) {
        passwordError.textContent = 'Password should contain at least one uppercase letter, one lowercase letter, and one digit.';
      }
  
      // Validate confirm password field
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
      }
    })
})
```

### 10.DOM Manipulate CSS Class Ans:

here we need 3 files: 

  a.index.html
  b.styles.css
  c.script.js

##  a.index.html :

```
<!DOCTYPE html>
<html>
<head>
  <title>DOM Manipulate CSS Class</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <button id="myButton">Click Me</button>
  <p id="myParagraph">This is a paragraph.</p>

  <script src="script.js"></script>
</body>
</html>
```
## b.styles.css :
```
.highlight {
    background-color: yellow;
  }
```

## c.script.js :
```
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');
    var paragraph = document.getElementById('myParagraph');
  
    button.addEventListener('click', function() {
      // Add the 'highlight' class to the paragraph element
      paragraph.classList.add('highlight');
    });
  });
```
