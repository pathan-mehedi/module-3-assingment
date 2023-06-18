const openNewWindow = (url, width, height) => {
    const windowFeatures = `width=${width},height=${height}`;
    window.open(url, '_blank', windowFeatures);
  };
  
  // Now call the function to open the new window
  openNewWindow("https://www.example.com", 800, 600);