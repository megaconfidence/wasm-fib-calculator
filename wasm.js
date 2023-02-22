import init, { wasmfib } from "./pkg/wasm_fib_rust.js"

init().then(() => {
    const form = document.querySelector('.fib-wasm-form');
    const input = document.querySelector('.fib-wasm-input');
    const display = document.querySelector('.fib-wasm-display');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const num = Number(input.value)
        const start = performance.now();
        const val = wasmfib(num);
        const end = performance.now();
        display.innerText = `${val} - in ${Math.round(end - start)}ms`;
    });
})
