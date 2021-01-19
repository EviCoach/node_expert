import net from 'net'

const port = 4001
const retryInterval = 1000 * 3 // 3 seconds
const retriedTimes = 0
const maxRetries = 10
let quitting = false

process.stdin.resume();
    (function connect() {
        function reconnect() {
            if (retriedTimes >= maxRetries) {
                throw new Error('Max retries have been exceeded, I give up')
            }
            retriedTimes += 1
            setTimeout(connect, retryInterval)
        }
        const conn = net.createConnection(port)
        conn.on('connect', () => {
            retriedTimes = 0
            console.log('connected to server')
        })
        conn.on('data', data => {
            if (
                data
                    .toString()
                    .trim()
                    .toLocaleLowerCase() === 'quit'
            ) {
                quitting = true
                console.log('quiting...')
                conn.end()
                process.stdin.end()
            } else {
                conn.write(data)
            }
        })
        conn.on('error', err => {
            console.log('Error in connection:', err)
        })
        conn.on('close', () => {
            console.log('connection got closed, will try to reconnect')
            if (!quitting) {
                reconnect();
            }
        })
        conn.pipe(process.stdout, { end: false });
    })();
