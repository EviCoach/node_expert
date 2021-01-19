import { spawn } from "child_process";

// Spawn the child with a sleep 10 command
let child = spawn('sleep', ['10'])

setTimeout(() => {
    child.kill();
}, 1000)

child.on('exit', (code, signal) => {
    if (code) {
        console.log(`child process terminated with code ${code}`)
    } else if (signal) {
        console.log(`child process terminated because of signal ${signal}`)
    }
})