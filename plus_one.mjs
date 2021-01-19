// Unpause the stdin stream
process.stdin.resume();
process.stdin.on('data', (data) => {
    let number;
    try {
        // parse the input data into a number
        number = parseInt(data.toString(), 10)

        // increment number by one
        number += 1;

        // output the number
        process.stdout.write(`${number}\n`)
    } catch (error) {
        process.stderr.write(`${error.message}\n`)
    }
})