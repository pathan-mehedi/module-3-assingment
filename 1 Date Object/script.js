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