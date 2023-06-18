document.addEventListener('DOMContentLoaded', function() {
    let myList = document.getElementById('myList');
  
    // Create and append list items
    for (let i = 1; i <= 5; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = 'Item ' + i;
      myList.appendChild(listItem);
    }
  });
  