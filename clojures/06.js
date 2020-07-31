// Challenge 6
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

function delay(callback, wait, params) {
    return setTimeout(() => callback(params), wait);
}
delay(console.log, 2000, "hello");
