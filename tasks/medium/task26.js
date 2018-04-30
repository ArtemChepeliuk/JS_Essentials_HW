function factorial(n) {
    for (var j = n - 1; j > 0; --j) {
        n = n * j
    }
    console.log(n);
}
factorial(5);