// Get references to the button and paragraph elements
let button = document.getElementById('myButton');
let paragraph = document.getElementById('myParagraph');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Change the text content of the paragraph element
  paragraph.innerHTML = 'Button Clicked!';
});
