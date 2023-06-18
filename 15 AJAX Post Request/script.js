function sendPostRequest() {
    let url = 'https://api.example.com/submit';
    let data = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };
  
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
  
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        let response = JSON.parse(request.responseText);
        console.log(response);
        // Handle the response data here
      }
    };
  
    request.onerror = function() {
      console.log('Request failed');
    };
  
    request.send(JSON.stringify(data));
  }
  
  sendPostRequest();
  