function changeTextColor() {
    var paragraphs = document.querySelectorAll('.red');
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = 'red';
    }
  }
  
  changeTextColor();
  