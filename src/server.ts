import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { setupChatHandlers } from './subscriptions/chat';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*', // Permitir conexiones desde cualquier origen; cambia según tus necesidades de seguridad
  },
});

app.use(express.json());

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Configura los manejadores específicos para el chat
  setupChatHandlers(io, socket);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

export { httpServer, app };
