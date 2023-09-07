/**
 * An example solution for `A + B` question.
 */
function* solve(): Generator<void, void, string> {
  while (true) {
    const [a, b] = (yield).split(" ").map(BigInt);
    console.log(`${a} + ${b} = ${a + b}`);
  }
}

function main() {
  const solution = solve();
  solution.next();
  require("readline")
    .createInterface({
      input: process.stdin,
    })
    .on("line", solution.next.bind(solution));
}

main();
