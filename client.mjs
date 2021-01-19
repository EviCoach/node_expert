import { spawn } from 'child_process'

// spawn child with a node process executing the plus_one app
let child = spawn('node', ['plus_one.mjs'])

setInterval(() => {
  // Create a random number smaller than 10.000
  let number = Math.floor(Math.random() * 10000)

  // Send that number to the child process
  child.stdin.write(`${number}\n`)

  // Get the response from the child process and print it
  child.stdout.on('data', data => {
    console.log(`child replied to ${number} with: ${data}`)
  })
}, 1000)
