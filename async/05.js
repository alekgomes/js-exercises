function limitedRepeat() {
  // ADD CODE HERE
  const counterLimit = 5;
  let counter = 0;
  
  const interval = setInterval(() => {
    counter++;
    if (counter === counterLimit) clearInterval(interval);
    console.log("hi for now");
  }, 1000);
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now
