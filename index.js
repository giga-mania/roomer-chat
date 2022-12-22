const {Server} = require("socket.io")

let USERS = []

const io = new Server({
    cors: {
        origin: "*"
    }
})


io.on("connection", (socket) => {-+

    socket.on("join", (name) => {
        socket.join(name)
    })

    socket.on("joined-room", (data) => {
        socket.to(data.roomName).emit("user-joined", data.username)
        USERS.push({id: socket.id, username: data.username, hsl: data.color})
        io.emit("getJoinedUsers", USERS)
    })

    socket.on("sendMessage", (data) => {
        socket.to(data.roomName).emit("receiveMessage", {message: data.message, username: data.username, hsl: data.color} )
        io.emit("handshake", socket.handshake)
        console.log(socket.handshake)
    })


    socket.on("disconnect", () => {
        const disconnectedUser = USERS.find((user) => user.id === socket.id)
        USERS = USERS.filter((user) => user.id !== socket.id)
        io.emit("getJoinedUsers", USERS)
        io.emit("getDisconnectedUser", disconnectedUser)
    })
})


const PORT = 8900
io.listen(PORT, () => {
    console.log("server running")
})

