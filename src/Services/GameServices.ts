import express from "express";
import { getDB } from "../DataBase/index";
import { GameAttributes } from "../interfaces/Game";
import { logger } from "../Utils/logger";

export const addGame = async (req: express.Request, res: express.Response) => {
    logger.info("Game Service: start Add Game function.");
    const game = req.body?.game as GameAttributes;

    try {
        const db = await getDB();
        const result = await db.games.addGame(game);
        res.status(200).send({ game: result })

    } catch (err) {
        logger.error(`Couldn't get DB: Error: ${err}`);
        res.status(500).send(err);
    }
};

export const getGameById = async (req: express.Request, res: express.Response) => {
    logger.info("Game Service: start Add Game function.");
    const game = req.params?.game as string;
    try {
        const db = await getDB();
        const result = await db.games.getGameById(parseInt(game));
        res.status(200).send({ game: result })

    } catch (err) {
        logger.error(`Couldn't get DB: Error: ${err}`);
        res.status(500).send(err);
    }
}