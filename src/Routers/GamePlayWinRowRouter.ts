import { Router } from 'express';
import { IsGamePlayAWinByRow } from '../Services/GamePlayesServices'

export const router = Router();

router.get('/:gameId/:playerId/:y', IsGamePlayAWinByRow);