# typescript-playground

The local `TypeScript` playground & debugger template you always wanted.

Useful for exploring latest features of `TypeScript`, or running/debugging example `Node.JS` code with `npm` packages, without creating a large project.

# Features

- Transpile `TypeScript` code to `JavaScript` code via `tsc`.
- `ECMAScript Modules` syntax by default.
- Use workspace version of `TypeScript`.
- Prepared `task` & `debugger` configuration.

# Requirements

- [`Node.JS`](https://nodejs.org) >= 18 and its built-in `npm`
- [`Visual Studio Code`](https://code.visualstudio.com) latest

# Usage

## 1. Clone this repo

```sh
git clone https://github.com/DarrenDanielDay/typescript-playground.git
cd typescript-playground
```

## 2. Install dependencies

```sh
npm install
```

You can update `TypeScript` to the latest release if you'd like:

```sh
npm install -D typescript@latest
```

## 3. Create a TypeScript source file

Create a `TypeScript` source file (with `.ts`, `.mts`, `.cts` extension) in `src` folder.

Here's an example `src/hello-world.ts` already created for you with the following content:

```ts
let location: string = import.meta.url;
console.log(`Hello-World from ${location}!`);
```

## 4. Run & Debug

In `Visual Studio Code`, you can add breakpoints in `TypeScript` source files, and then press `F5` when you want to run & debug current file as the entry point.

You can also use `stdin.txt` as `stdin` input if you want to write, run and debug solution code for OI questions with TypeScript. See `src/oi.cts` for detailed example.

## License

```text
 __________________
< The MIT license! >
 ------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

---

**Happy hacking!**
