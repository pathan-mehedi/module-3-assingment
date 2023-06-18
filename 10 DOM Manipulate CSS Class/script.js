document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('myButton');
    let paragraph = document.getElementById('myParagraph');
  
    button.addEventListener('click', function() {
      // Add the 'highlight' class to the paragraph element
      paragraph.classList.add('highlight');
    });
  });
  