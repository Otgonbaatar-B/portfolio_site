import express from "express";
import cors from "cors";
import helmet from "helmet";
import dbConnect from "./lib/dbConnect.js";

import chatRoutes from "./app/api/chat/index.js";
import messagesRoutes from "./app/api/messages/index.js";

const server = express();
const PORT = 6001;

dbConnect();

server.use(helmet());
server.use(cors());
server.use(express.json({ limit: "10kb" }));

// API routes
server.use("/api/chat", chatRoutes);
server.use("/api/messages", messagesRoutes);

// Error handler
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

server.listen(PORT, () => {
  console.log(
    `\x1b[32m🔄 Сервер ажиллаж эхэллээ http://localhost:${PORT}\x1b[0m`
  );
});
