import net from 'net';

let server = net.createServer((socket) => {
    console.log(`New connection`);

    socket.setEncoding('utf8');
    socket.write("Hello! You can start typing. Type 'quit' to exit. \n")
    socket.on('data', (data) => {
        console.log('got:', data.toString())
        if (data.trim().toLowerCase() === 'quit') {
            socket.write('Bye bye!');
            return socket.end();
        }
        socket.write(data);
    })
    socket.on('end', () => {
        console.log('Client connection ended');
    })
}).listen(4001);