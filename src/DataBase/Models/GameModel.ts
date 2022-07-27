import { DataTypes, Model, Sequelize } from "sequelize";
import { GameAttributes } from "../../interfaces/Game";

export class GameModel extends Model<GameAttributes> implements GameAttributes {
    public gameId: number;
    public playerId: number;
    public playerName: string;
    public win: boolean;
}

export const init = async (sequelize: Sequelize) => {
    GameModel.init({
       gameId:{
        allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
       },
       playerId:{
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
       },
       playerName:{
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
       },
       win:{
            allowNull: false,
            type: DataTypes.BOOLEAN,
            primaryKey: true,
       }
    },
        {
            tableName: 'game',
            sequelize
        });

    await GameModel.sync();
}

