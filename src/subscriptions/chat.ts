import { Server, Socket } from 'socket.io';

export function setupChatHandlers(io: Server, socket: Socket) {
  socket.on('chat_message', (msg) => {
    io.emit('chat_message', msg); // Reenvía el mensaje a todos los clientes conectados
  });

  // Aquí puedes agregar más eventos específicos para chats
}
