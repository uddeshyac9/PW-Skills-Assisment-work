function remainingDays(eventDate) {
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const remainingDays = Math.ceil(timeDifference / millisecondsPerDay);
    return remainingDays;
  }
  
  // Example usage
  const eventDate = new Date('2023-08-31'); // Example event date
  const daysUntilEvent = remainingDays(eventDate);
  console.log(`Remaining days until the event: ${daysUntilEvent}`);