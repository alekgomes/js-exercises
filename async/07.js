/* CHALLENGE 7 */

function delayCounter(target, wait) {
    let initial = 1
    const interval = setInterval(() => {
        if(initial === target) clearInterval(interval)
        console.log(initial)
        initial++
    }, wait)

}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3
