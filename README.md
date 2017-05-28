# Speedy.js Playground

## Getting Started

Clone this git repository:

```bash
git clone https://github.com/MichaReiser/speedy.js-playground.git
```

Then run `npm install` to install all dependencies (ensure your computer fulfills [the requirements of Speedy.js](https://github.com/MichaReiser/speedy.js#getting-started))

```bash
npm install
```

The final step is to start the WebPack Dev Server using `npm start`.

```bash
npm start
```

Start hacking!

## Dig deeper

Are you interested in the details? You can call the Speedy.js compiler manually using the following command:

``` bash
$(npm bin)/speedyjs --help
```

You can find a detailed description of the CLI in [the wiki](https://github.com/MichaReiser/speedy.js/wiki/CLI) of the [Speedy.js project page](https://github.com/MichaReiser/speedy.js).

### LLVM-Commands
You can determine the path of the LLVM tools used by Speedy.js by using 

```bash
$(npm config get LLVM_CONFIG) --bindir
```

You have to use the same LLVM tools as Speedy.js in case you want to disassemble a bitcode file. Otherwise, the LLVM command might fail with a version mismatch error. For example, you can call `llvm-dis` using the following command:

```bash
$($(npm config get LLVM_CONFIG) --bindir)/llvm-dis --version
```