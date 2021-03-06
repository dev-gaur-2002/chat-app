import { createContext, useContext } from "react"
import {io} from "socket.io-client" 
import { SOCKET_URL } from "../config/default"

const socket = io(SOCKET_URL)
console.log(SOCKET_URL)
const SocketContext = createContext({socket})
function SocketProvider(props:any){

    return(
        <SocketContext.Provider value={{socket}} {...props}/>
    )
}
export const useSockets = ()=>useContext(SocketContext);

export default SocketProvider