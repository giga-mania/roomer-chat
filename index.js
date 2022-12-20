const {Server} = require("socket.io")

let USERS = []

const io = new Server({
    cors: {
        origin: "*"
    }
})
io.on("connection", (socket) => {
    console.log("CONNECTED to", "-->>", socket.id)

    // Add client to USERS on connection
    const username = socket.handshake.query.data
    USERS.push({id: socket.id, username})


    socket.on("sendMessage", (message) => {
        socket.broadcast.emit("getMessage", {other: true, message})
    })

    socket.emit("test", {test: "tester"})


    socket.on("disconnect", () => {
        console.log("DISCONNECTED user", socket.id)
        USERS = USERS.filter((user) => user.id !== socket.id)
    })
})


const PORT = 8900
io.listen(PORT, () => {
    console.log("server running")
})


