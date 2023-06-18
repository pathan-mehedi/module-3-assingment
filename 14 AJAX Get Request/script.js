function sendGetRequest() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.example.com/data', true);
  
    request.onload = function() {
      if (request.status === 200) {
        let responseData = JSON.parse(request.responseText);
        console.log(responseData);
        // Handle the response data here
      } else {
        console.log('Request failed. Status:', request.status);
      }
    };
  
    request.onerror = function() {
      console.log('Request failed. Network error.');
    };
  
    request.send();
  }
  
  sendGetRequest();
  