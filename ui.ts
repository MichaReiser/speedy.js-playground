
import {fib} from "./fib-spdy";

const logOutput = document.querySelector("#log");

function serialize(value) {
    if (value instanceof Error) {
        return value.stack.replace("\n", "\n\r");
    }

    return JSON.stringify(value);
}
/**
 * Prints a message to the on screen console
 * @param args the arguments to print to the console. Either a string or an object
 */
function printToConsole(...args: any[]) {
    let output;
    const firstArg = args.length > 0 ? args[0] : "";
    if (typeof firstArg === "object") {
        output = args.map(serialize).join("&nbsp;");
    } else {
        output = args.join(", ");
    }

    logOutput.textContent += output;
}

/**
 * Redirects console.log calls to the console in the index.html
 */
export function redirectConsoleLog() {
    function createLogger(log) {
        return function redirectToOnScreenLog() {
            log.apply(console, arguments);
            printToConsole.apply(undefined, arguments);
            printToConsole("\n\r");
        }
    }

    console.log = createLogger(console.log);
    console.error = createLogger(console.error);
}

/**
 * Typesets a text with pauses between setting each char.
 * @param text the text to typeset
 * @param newline insert a newline after the text
 */
async function typeset(text: string, newline = true) {
    for (let i = 0; i < text.length; ++i) {
        printToConsole(text[i]);
        await pause(50);
    }

    if (newline) {
        printToConsole("\n\r");
    }
}

/**
 * Returns a promise that is resolved approximately after the defined duration
 * @param duration {int | "normal" | "short" | "long"} a duration in milliseconds or one of the defined enum values
 * @returns a promise 
 */
function pause(duration: number | "normal" | "short" | "long" = "normal") {
    let ms;

    if (typeof duration === "string") {
        switch (duration) {
        case "short": 
            ms = 300;
            break;
        default:
        case "normal":
            ms = 600;
            break;
        case "long":
            ms = 3000;
            break;
        }
    } else {
        ms = duration;
    }
    
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export async function intro() {
    if (window.document.URL.indexOf("intro=false") !== -1) {
        return;
    }

    await typeset("This is the Speedy.js Playground...");
    await pause();

    await typeset("... it demonstrates you the power and the simplicity in use of Speedy.js.");
    await pause();
    printToConsole("\n\r");

    await typeset("To compile your program with Speedy.js, you need to follow these instructions:")
    await pause();

    await typeset("     • put it in a file that ends with '-spdy.ts'");
    await pause("short");
    await typeset("     • add the 'async' and 'export' modifiers to your function");
    await pause("short");
    await typeset("     • add the \"use speedyjs\" directive as the first statement in your function");
    await typeset("     • import the created function into the 'index.ts' file");
    await pause("short");
    await typeset("     • and, finally, call your function from the main function in the 'index.ts' file (don't forget the 'await' keyword)");
    await pause("long");

    printToConsole("\n\r");

    await typeset("To write to this console, use 'console.log' (not supported from inside of Speedy.js functions).");
    await pause();
    printToConsole("\n\r");

    await typeset("You need some inspiration or are still unsure how this all works...");
    await typeset("... then take a look at the `fib-spdy.ts' file: An implementation of the recursive Fibonacci number algorithm.");
    printToConsole("\n\r");

    await typeset("Let's compute the Fibonacci number of 40 to show that all of this is not just a tale...");
    await typeset("... and, the result is: ", false);
    await typeset("" + await fib(40));
    await pause("long");
    printToConsole("\n\r");

    await typeset("Now it's your turn!");

    await pause();
    await typeset("\nAnd just in case you get annoyed by this intro text. You can add the URL parameter '?intro=false' to suppress it.");
}
