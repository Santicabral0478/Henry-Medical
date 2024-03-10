import express from "express";
import cors from 'cors';
import router from "./routes";
const server = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
};

server.use(cors(corsOptions)); 

server.use(express.json());
server.use(router);

export default server;