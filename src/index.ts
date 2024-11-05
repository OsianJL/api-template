import express from 'express';
import authRoutes from './routes/authRoutes';
import { connectMongoDB } from './config/database';

const app = express();
app.use(express.json());

connectMongoDB(); 

app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
