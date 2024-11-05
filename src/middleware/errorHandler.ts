import { Request, Response, NextFunction } from 'express';
import logger from '../logs/logger';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Registrar el error
  logger.error(`
    ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}
  `);

  // Asegurarse de que `res` es una función antes de responder
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ message: 'Something went wrong!' });
}
