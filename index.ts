import {redirectConsoleLog, intro} from "./ui";
import {fib} from "./fib-spdy";
// insert your imports here!


async function main() {
    await intro();

    // call your function here
    // e.g. console.log(await fib(40));
}


redirectConsoleLog();
main();