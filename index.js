function fib(n) {
    if(n < 1) return 1;
    return fib(n-1)+fib(n-2);
}

document.querySelector('.fib-js-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(document.querySelector('.fib-js-input').value)
    const start = performance.now();
    const val = fib(num);
    const end = performance.now();
    document.querySelector('.fib-js-display').innerText =`${val} - in ${end-start}ms`;
});
