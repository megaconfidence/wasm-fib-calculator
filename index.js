function fib(n) {
    if (n < 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

const form = document.querySelector('.fib-js-form');
const input = document.querySelector('.fib-js-input');
const display = document.querySelector('.fib-js-display');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(input.value)
    const start = performance.now();
    const val = fib(num);
    const end = performance.now();
    display.innerText = `${val} - in ${Math.round(end - start)}ms`;
});
