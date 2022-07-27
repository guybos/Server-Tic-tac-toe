import { Router } from 'express';
import { IsGamePlayAWinByDiagonal } from '../Services/GamePlayesServices'

export const router = Router();

router.get('/:gameId/:playerId/', IsGamePlayAWinByDiagonal);