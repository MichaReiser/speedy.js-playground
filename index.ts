import {redirectConsoleLog, intro} from "./ui";
import {fib} from "./fib-spdy";
// insert your imports here!


async function main() {
    try {
        await intro();

        // call your function here
        // e.g. console.log(await fib(40));
    } catch (error) {
        console.error(error);
    }
}


redirectConsoleLog();
main();
