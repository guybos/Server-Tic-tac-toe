import express from "express";
import { getDB } from "../DataBase/index";
import { GamePlaysAttributes } from "../interfaces/GamePlays";
import { logger } from "../Utils/logger";

export const addGamePlay = async (req: express.Request, res: express.Response) => {
    logger.info("GamePlays Service: start Add GamePlay function.");
    const gamePlay = req.body?.gamePlay as GamePlaysAttributes;

    try {
        const db = await getDB();
        const result = await db.gamePlays.addGamePlay(gamePlay);
        res.status(200).send({ gamePlay: result })

    } catch (err) {
        logger.error(`Couldn't get DB: Error: ${err}`);
        res.status(500).send(err);
    }
};

export const IsGamePlayPossible = async (req: express.Request, res: express.Response) => {
    logger.info("GamePlays Service: start Is GamePlay Possible function.");
    const gameId = req.params?.gameId as string;
    const x = req.params?.x as string;
    const y = req.params?.y as string;
    try {
        const db = await getDB();
        const result = await db.gamePlays.getGamePlaysFromXAndYPerGame(parseInt(gameId), parseInt(x), parseInt(y))as GamePlaysAttributes[];
        if (result.length > 0) {
            res.status(200).send({ possible: false });
        } else {
            res.status(200).send({ possible: true });
        }


    } catch (err) {
        logger.error(`Couldn't get DB: Error: ${err}`);
        res.status(500).send(err);
    }
};

export const IsGamePlayAWinByColumn = async (req: express.Request, res: express.Response) => {
    logger.info("GamePlays Service: start Add GamePlay function.");
    const gameId = req.params?.gameId as string;
    const playId = req.params?.playId as string;
    const x = req.params?.x as string;
    try {
        const db = await getDB();
        const result = await db.gamePlays.getGamePlaysFromColumnAndPlayerPerGame(parseInt(gameId), parseInt(playId), parseInt(x)) as GamePlaysAttributes[];
        if (result.length !== 3) {
            res.status(200).send({ win: false });
        }
        res.status(200).send({ win: true })

    } catch (err) {
        logger.error(`Couldn't get DB: Error: ${err}`);
        res.status(500).send(err);
    }
};


export const IsGamePlayAWinByRow = async (req: express.Request, res: express.Response) => {
    logger.info("GamePlays Service: start Add GamePlay function.");
    const gameId = req.params?.gameId as string;
    const playId = req.params?.playId as string;
    const y = req.params?.y as string;
    try {
        const db = await getDB();
        const result = await db.gamePlays.getGamePlaysFromRowAndPlayerPerGame(parseInt(gameId), parseInt(playId), parseInt(y) )as GamePlaysAttributes[];
        if (result.length !== 3) {
            res.status(200).send({ win: false });
        }
        res.status(200).send({ win: true })

    } catch (err) {
        logger.error(`Couldn't get DB: Error: ${err}`);
        res.status(500).send(err);
    }
};

export const IsGamePlayAWinByDiagonal = async (req: express.Request, res: express.Response) => {
    logger.info("GamePlays Service: start Add GamePlay function.");
    const gameId = req.params?.gameId as string;
    const playId = req.params?.playId as string;
    try {
        const db = await getDB();
        const gamePlays: GamePlaysAttributes[] = [];
        let j = 3;
        for (let i = 1; i < 4; i++) {
            const diagonalA = await db.gamePlays.getGamePlaysFromXAndYAndPlayerPerGame(parseInt(gameId), parseInt(playId), i, i);
            gamePlays.push(diagonalA);
            if (i != 2) {
                const diagonalB = await db.gamePlays.getGamePlaysFromXAndYAndPlayerPerGame(parseInt(gameId), parseInt(playId), i, j);
                gamePlays.push(diagonalB);
            }
            j--;
        }
        if (gamePlays.length !== 5) {
            res.status(200).send({ win: false });
        }
        res.status(200).send({ win: true })

    } catch (err) {
        logger.error(`Couldn't get DB: Error: ${err}`);
        res.status(500).send(err);
    }
};

