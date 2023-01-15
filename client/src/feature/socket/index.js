import {io} from "socket.io-client"

const socket = io("http://roomer-server:8080/", {autoConnect: false})

export default  socket