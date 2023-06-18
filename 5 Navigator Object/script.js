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