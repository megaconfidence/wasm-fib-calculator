# wasm-fib-calculator
This project demonstrates how to use WebAssembly in a web app and compares the
performance of JavaScript to Wasm written in Rust

## Setup
Create a Rust project. Follow the guide [here](https://doc.rust-lang.org/book/ch01-01-installation.html#installing-rustup-on-linux-or-macos) to install Rust locally
```sh 
cargo new wasm-fib-rust
```
Install `wasm-pack`
```sh 
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh 
```
Add these to the `Cargo.toml` file
```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.84"
```
Rename `main.rs` to `lib.rs` and add the code below
```rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn wasmfib(n: i32) -> i32 {
    if n < 1 {
        return 1;
    };
    return wasmfib(n - 1) + wasmfib(n - 2);
}
```
Build the project with
```sh 
wasm-pack build --target web 
```
Clone the starter repo
```
cd ../
git clone https://github.com/megaconfidence/wasm-fib-calculator.git
```
Copy the `pkg/` directory into the project root
```sh 
cp -r wasm-fib-rust/pkg wasm-fib-calculator/pkg
```
Startup the project using a static file server
```sh 
python -m http.server 8000
```
Visit the project on [http://localhost:8000/](http://localhost:8000/)
