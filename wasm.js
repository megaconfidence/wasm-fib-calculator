import init, { wasmfib } from "./pkg/factorial_app_wasm.js"

init().then(() => {
    document.querySelector('.fib-wasm-form').addEventListener('submit', (e) => {
        e.preventDefault()
        const num = Number(document.querySelector('.fib-wasm-input').value)
        const start = performance.now();
        const val = wasmfib(num);
        const end = performance.now();
        document.querySelector('.fib-wasm-display').innerText = `${val} - in ${Math.round(end - start)}ms`;
    });
})
