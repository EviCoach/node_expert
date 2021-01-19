import net from 'net'

let server = net.createServer()

let sockets = []

// Accepting connections
server.on('connection', socket => {
    console.log('Got a new connection')

    // Collecting all the clients
    sockets.push(socket)

    // Reading data from a new connection
    socket.on('data', data => {
        console.log('got data: ', data)

        // Broadcasting data
        sockets.forEach(otherSocket => {
            if (otherSocket !== socket) {
                otherSocket.write(data)
            }
        })
    });

    socket.on('close', () => {
        console.log('connection closed')
        let index = sockets.indexOf(socket)
        sockets.splice(index, 1)
    })
});

server.on('error', err => {
  console.log('Server error: ', err.message)
})

server.on('close', () => {
  console.log('Server closed')
})

server.listen(4001)
