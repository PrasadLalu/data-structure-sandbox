function fibonacciSeries(n) {
    if (n < 1) return;

    let a = 0;
    let b = 1;
    console.log(a);

    if (n === 1) return;
    console.log(b);

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}

fibonacciSeries(9);