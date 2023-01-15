import {io} from "socket.io-client"

const socket = io("https://urchin-app-4g4bu.ondigitalocean.app/", {autoConnect: false})

export default  socket