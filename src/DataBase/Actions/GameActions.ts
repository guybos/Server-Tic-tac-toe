import { GameAttributes } from "../../interfaces/Game";
import { logger } from "../../Utils/logger";
import { GameModel } from "../Models/GameModel";

export class GameActions {


    async addGame(game: GameAttributes): Promise<GameAttributes>{
        logger.info("Game Actions: start add Game function.");
        const result = await GameModel.create(game);
        return result?.toJSON() as GameAttributes;
    }

    async getGameById(gameId: number){
        logger.info("Game Actions: start get Game by Id function.");
        const result = await GameModel.findByPk(gameId);
        return result?.toJSON() as GameAttributes;
    }
}