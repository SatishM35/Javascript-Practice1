//Fibonacci sequence : 0 1 1 2 3 5 8 13
// 
function fibonacci(n) {
    let fibSequence = [0, 1];
    while (fibSequence.length < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

console.log(fibonacci(10));