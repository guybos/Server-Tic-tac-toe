import { Router } from 'express';
import { addGamePlay, IsGamePlayPossible } from '../Services/GamePlayesServices'

export const router = Router();

router.post('/', addGamePlay);
router.get('/:gameId/:x/:y', IsGamePlayPossible);