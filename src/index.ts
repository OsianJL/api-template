import express from 'express';
import authRoutes from './routes/authRoutes';
import { connectMongoDB } from './config/database';
import { httpServer } from './server';

const app = express();
app.use(express.json());

connectMongoDB();

app.use('/auth', authRoutes);

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
