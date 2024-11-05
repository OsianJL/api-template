import express from 'express';
import { register, login } from '../controllers/userController';

const router = express.Router();

console.log("Rutas de autenticación cargadas"); // Añadir este mensaje

router.post('/register', register);
router.post('/login', login);

export default router;
