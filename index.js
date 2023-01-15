const {Server} = require("socket.io")

let USERS = []

const io = new Server({
    cors: {
        origin: "*"
    }
})


io.on("connection", (socket) => {
    socket.on("join", (roomName) => {
        socket.join(roomName)
    })

    socket.on("joined-room", (data) => {
        socket.to(data.roomName).emit("user-joined", data.username)
        USERS.push({id: socket.id, username: data.username, hsl: data.hsl, roomname: data.roomName})
        io.emit("getJoinedUsers", USERS)
    })

    socket.on("sendMessage", (data) => {
        socket.to(data.roomName).emit("receiveMessage", {message: data.message, username: data.username, hsl: data.hsl} )
        io.emit("handshake", socket.handshake)
    })


    socket.on("disconnect", () => {
        const disconnectedUser = USERS.find((user) => user.id === socket.id)
        io.emit("getDisconnectedUser", disconnectedUser)

        USERS = USERS.filter((user) => user.id !== socket.id)
        io.emit("getJoinedUsers", USERS)
    })
})

let PORT = process.env.PORT || 8900
console.log("socker server: >>>>>>", PORT)
io.listen(PORT)

