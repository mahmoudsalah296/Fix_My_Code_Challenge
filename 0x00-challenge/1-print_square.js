#!/usr/bin/node
/*
    Print a square with the character #
    The size of the square must be the first argument 
    of the program.
*/
if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}
let size = parseInt(process.argv[2]);
if (isNaN(size)) {
    process.exit(1);
}
for (let i = 0; i < size; i++) {
    console.log("#".repeat(size));
}
