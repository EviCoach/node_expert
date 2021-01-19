import { spawn } from 'child_process';

let child = spawn('ls', ['-la filename.txt'])

child.stdout.on('data', (data) => {
    console.log(`data from child: ${data}`)
})

child.on('exit', (code, signal) => {
    console.log(`child process terminated with code ${code} and signal ${signal}`)
})