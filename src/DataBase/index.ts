import { Sequelize } from "sequelize";
import  {init as initGame } from "./Models/GameModel";
import  {init as initGamePlays } from "./Models/GamePlaysModel";
import { GameActions } from "./Actions/GameActions";
import { GamePlaysActions } from "./Actions/GamePlaysActions";
import { logger } from "../Utils/logger";

interface DB {
    initialized: boolean,
    games: GameActions,
    gamePlays: GamePlaysActions,
    sequelize: Sequelize | null,
}


const db: DB = {
    initialized: false,
    games: new GameActions(),
    gamePlays: new GamePlaysActions(),
    sequelize: null,
}

export const getDB = async (): Promise<DB> => {

    if (db.initialized) {
        return db;
    }

    db.sequelize = new Sequelize("tictactoe", "testWorkUser", "Aa100100", {
        host: "localhost",
        dialect: 'mysql',
        logging: false
    });



    await db.sequelize.validate();

    logger.info('DB Validated successfully');

    await initGame(db.sequelize);

    await initGamePlays(db.sequelize);
    
    db.initialized = true;

    db.sequelize.sync({ alter: true });

    logger.info('Successfully connected to DB');

    return db;
}