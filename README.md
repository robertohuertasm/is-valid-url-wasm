# url-checker

This is a simple npm package leveraging the power of Rust + WASM in order to tell you if some `String` has a proper `URL` format or not. Just that!

For the moment, given that `wasm-pack` only offers either support for the browser or for NodeJs, this package can only be used on the web.

Note also that `WASM` loads asynchronously so the import has to be `async` too.

## Example

If you want to run the example, access to the `example` folder and run `npm i`. Then run `npm run serve` to start the `webpack` server.

Note that this example is using `TypeScript`.

## Improvements

1.  Try to provide a package that can be used both in `NodeJs` and in the `browser`.
1.  Reduce the size of the `.wasm` file by using [binaryen](https://github.com/WebAssembly/binaryen)
