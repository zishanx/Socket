import { socket } from './socket.js'
import { useEffect } from 'react'

export default function App() {

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server")
            console.log("Socket ID:", socket.id)
        });

        return () => {
            socket.off("connect");
        }
    }, [])

    return (
        <>
            <h1>Chat App</h1>
        </>
    )
}