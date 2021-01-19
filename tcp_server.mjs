import net from 'net'

let server = net.createServer();

const port = 4001;

server.on('listening', () => {
    console.log(`Server listening on port ${port}`)
})

server.on('connection', (socket) => {
    console.log(`Server has a new connection`)
    socket.end();
    server.close();
})

server.on('close', () => {
    console.log(`Server is now closed`)
})

server.on('error', (err) => {
    console.log(`Error occurred:, ${err.message}`)
})

server.listen(port);
