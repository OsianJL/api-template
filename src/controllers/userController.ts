import { Request, Response, NextFunction, RequestHandler } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, surname, email, password } = req.body;
    const user = await registerUser(name, surname, email, password);
    res.status(201).json(user);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === 'The email is already in use.'
    ) {
      res.status(400).json({ message: error.message });
    } else {
      console.error(error);
      next(error);
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.json({ user, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};
