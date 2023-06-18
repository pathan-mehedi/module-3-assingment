// The handleClick function retrieves the mouse coordinates (clientX and clientY) start
function handleClick(event) {
    let x = event.clientX;
    let y = event.clientY;
    alert("Clicked at coordinates (x, y): " + x + ", " + y);
  }
  
  function handleKeyPress(event) {
    let keyCode = event.keyCode || event.which;
    alert("Pressed key with code: " + keyCode);
  }

// The handleClick function retrieves the mouse coordinates (clientX and clientY) end.

let originalImageSrc; // letiable to store the original image source

function handleMouseOver(imageElement) {
  originalImageSrc = imageElement.src; // Store the original image source
  imageElement.src = "./public/image_2.jpg";
}

function handleMouseOut(imageElement) {
  imageElement.src = originalImageSrc; // Revert back to the original image source
}