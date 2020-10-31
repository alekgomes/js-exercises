function everyXsecsForYsecs(cb, inner, outter) {
  // ADD CODE HERE
  const counterLimit = outter / inner
  let counter = 0

  const interval = setInterval(() => {
    counter++;
    if(counterLimit === counter) clearInterval(interval)
    cb();    
  }, inner*1000)

}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
