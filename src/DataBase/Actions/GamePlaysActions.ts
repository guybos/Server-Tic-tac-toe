import { GamePlaysAttributes } from "../../interfaces/GamePlays";
import { logger } from "../../Utils/logger";
import { GamePlaysModel } from "../Models/GamePlaysModel";

export class GamePlaysActions {


    async addGamePlay(gamePlay : GamePlaysAttributes) : Promise<GamePlaysAttributes> {
        logger.info("GamePlays Actions: start add GamePlay function.");
        const result = await GamePlaysModel.create(gamePlay);
        return result?.toJSON() as GamePlaysAttributes;
    }

    async getGamePlaysFromRowAndPlayerPerGame(gameId: number, playerId: number, y: number) {
        logger.info("GamePlays Actions: start get GamePlay FromRowAndPlayerPerGame function.");
        const result = await GamePlaysModel.findAll({
            where:{
                gameId,
                playerId,
                y
            }
        })
        return result?.map( gamePlay => gamePlay.toJSON() as GamePlaysAttributes);
    }

    async getGamePlaysFromColumnAndPlayerPerGame(gameId: number, playerId: number, x: number) {
        logger.info("GamePlays Actions: start get GamePlay FromColumnAndPlayerPerGame function.");
        const result = await GamePlaysModel.findAll({
            where:{
                gameId,
                playerId,
                x
            }
        })
        return result?.map( gamePlay => gamePlay.toJSON() as GamePlaysAttributes);
    }

    async getGamePlaysFromXAndYPerGame(gameId: number, x: number, y: number) {
        logger.info("GamePlays Actions: start get GamePlay FromXAndYPerGame function.");
        const result = await GamePlaysModel.findAll({
            where:{
                gameId,
                y,
                x  
            }
        })
        return result?.map( gamePlay => gamePlay.toJSON() as GamePlaysAttributes);
    }

    async getGamePlaysFromXAndYAndPlayerPerGame(gameId: number, playerId: number, x:number, y: number) {
        logger.info("GamePlays Actions: start get GamePlay FromXAndYAndPlayerPerGame function.");
        const result = await GamePlaysModel.findOne({
            where:{
                gameId,
                playerId,
                y,
                x
            }
        })
        return result?.toJSON() as GamePlaysAttributes;
    }
}