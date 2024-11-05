import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: number;
  role: string;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token)
    return res.status(401).json({ message: 'Access denied, token missing!' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = { id: decoded.userId, role: decoded.role };
    next();
  } catch {
    //! he eliminado el error dentro de catch(error) debido al linter
    res.status(403).json({ message: 'Invalid token!' });
  }
};

export const authorizeRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== role)
      return res.status(403).json({ message: 'Forbidden!' });
    next();
  };
};
