const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A user connected")
})