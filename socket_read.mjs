import net from 'net';
import fs from 'fs';

net.createServer((socket) => {
    let rs = fs.createReadStream('hello.txt');
    rs.pipe(socket, {end: false});
}).listen(4001);