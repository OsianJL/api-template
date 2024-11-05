import { app, httpServer } from './server';
import authRoutes from './routes/authRoutes';
import { connectMongoDB } from './config/database';
import { errorHandler } from './middleware/errorHandler';

connectMongoDB();

// Middleware de depuración para mostrar las solicitudes entrantes
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });

// Rutas de prueba y autenticación
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.use('/auth', authRoutes);
app.use(errorHandler);

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
