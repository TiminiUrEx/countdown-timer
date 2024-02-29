
const currentDate = new Date()

  // Get the current date and time
const endDate = new Date()
endDate.setDate(endDate.getDate() + 10)
let timeDifference = endDate.getTime() - currentDate.getTime();

// Update the countdown every second
const countdown = setInterval(() => {

  // Calculate the remaining time
  timeDifference -= 1000;
  
  
  
  
  // Calculate days, hours, minutes, and seconds left
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  // Display the countdown
  document.getElementById('d').innerHTML = `${daysLeft}`;
  document.getElementById('hours').innerHTML = `${hoursLeft} Hrs`;
  document.getElementById('minutes').innerHTML = `${minutesLeft} Mins`;
  document.getElementById('seconds').innerHTML = `${secondsLeft} Secs`;
  
  // Check if the giveaway has ended
  if (timeDifference < 0) {
    clearInterval(countdown);
    document.getElementById('days').innerHTML = 'Expired';
    document.getElementById('hours').innerHTML = '';
    document.getElementById('minutes').innerHTML = '';
    document.getElementById('seconds').innerHTML = '';
  }
}, 1000);
document.getElementById(`endate`).innerHTML = `This giveaway will end on ${endDate}`

