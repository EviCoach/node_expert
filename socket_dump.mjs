import { Socket } from 'dgram';
import fs from 'fs';
import net from 'net'

let ws = fs.createWriteStream('mysocketdump.txt');

net.createServer((socket) => {
    socket.pipe(ws);
}).listen(4001);