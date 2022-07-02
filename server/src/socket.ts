import logger from "./utils/logger";
import {Server, Socket} from 'socket.io'

const EVENTS = {
    connection: "connection",
    disconnect:"disconnect",
}

function socket({io}:{io:Server}){
    logger.info("socket enabled")

    io.on(EVENTS.connection,(socket:Socket)=>{
        logger.info(`a user is connected ${socket.id}`)
        socket.on(EVENTS.disconnect,()=>[
            logger.info(`user ${socket.id} disconnected`)
        ])
    })

}

export default socket