import { Router } from 'express';
import { IsGamePlayAWinByColumn } from '../Services/GamePlayesServices'

export const router = Router();

router.get('/:gameId/:playerId/:x', IsGamePlayAWinByColumn);