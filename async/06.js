function everyXsecsForYsecs(cb, x, y) {
  // ADD CODE HERE
  let limit = y;
  const outerIterval = () => {
    setInterval(innerInterval, y);
  };

  const innerInterval = () => {
    limit = limit - 1
    setInterval(cb, x);
  };

  outerIterval()
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
