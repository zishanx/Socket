import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
app.use(express.json())

const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

io.on('connection', (socket)=>{
    console.log('A client connected:', socket.id)
    setInterval(()=>{
        let randomNumber = Math.random()* 10
        socket.emit('randomNumber',randomNumber)
    }, 2000)
})

server.listen(3000, () => {
    console.log("Listening on port 3000")
})