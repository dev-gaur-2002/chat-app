import express, { Request, Response } from "express";
import config from "config";
import cors from "cors";
import {createServer} from "http";
import {Server} from "socket.io";
import logger from "./utils/logger";
import socket from "./socket";


const port = config.get<number>("port")
const host = config.get<number>("host")
const corsOrigin = config.get<string>("corsOrigin")

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer,{
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
        // credentials:true,
    },
});

app.get('/',(req:Request,res :Response)=>{
    res.send("hello")
})
console.log(typeof(io))
// socket({io});

httpServer.listen(port, host, ()=>{
    logger.info(`server is up at port ${port}`)
    logger.info(`http://${host}:${port}`);
    socket({io})
})

