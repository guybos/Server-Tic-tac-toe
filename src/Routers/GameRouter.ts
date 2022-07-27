import { Router } from 'express';
import { addGame, getGameById } from '../Services/GameServices'

export const router = Router();

router.post('/', addGame);
router.get('/:game', getGameById);