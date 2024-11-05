import { PrismaClient } from '@prisma/client';
import mongoose from 'mongoose';

const prisma = new PrismaClient();

async function connectMongoDB() {
  try {
    await mongoose.connect(
      'mongodb://mongo_user:mongo_password@localhost:27017'
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

export { prisma, connectMongoDB };
