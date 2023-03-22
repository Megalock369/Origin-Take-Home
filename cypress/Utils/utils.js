  // This file was created to add functions that can be used in other contexts 
  
  export function getNextMonth(currentMonthStr) {
    // Create an array of month names
    const months = [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December'
    ];
    // Get the index of the current month in the array
    let currentMonthIndex = months.indexOf(currentMonthStr);
    // Calculate the index of the next month (wrapping around to January if necessary)
    let nextMonthIndex = (currentMonthIndex + 1) % 12;
    return months[nextMonthIndex];
  }
  
  export function getNextYear(currentMonthStr, currentYearStr) {
    // Increases the current year if the current month is december
    if (currentMonthStr == 'December'){
      return (parseInt(currentYearStr) +1).toString();
    }
    else {
      return currentYearStr;
    }
  }
  
  export function getCurrentMonth(){
    // Identifies the current month
    const month = new Date();
    const currentMonth = month.toLocaleString('en-US', { month: 'long' });
  return currentMonth;
  }
  
  export function getCurrentYear(){
    // Identifies the current year
    const year = new Date();
    const currentYear = year.toLocaleString('en-US', { year: 'numeric' });
  return currentYear;
  }
