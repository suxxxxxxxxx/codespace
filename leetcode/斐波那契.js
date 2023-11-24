var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};