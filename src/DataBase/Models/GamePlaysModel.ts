import { DataTypes, Model, Sequelize } from "sequelize";
import { GamePlaysAttributes } from "../../interfaces/GamePlays";

export class GamePlaysModel extends Model<GamePlaysAttributes> implements GamePlaysAttributes {
    public playId: number;
    public gameId: number;
    public playerId: number;
    public x: number;
    public y: number;
}

export const init = async (sequelize: Sequelize) => {
    GamePlaysModel.init({
        playId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        gameId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: false,
        },
        playerId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: false,
        },
        x: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: false,
            validate:{
                min:1,
                max:3
            }
        },
        y: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: false,
            validate:{
                min:1,
                max:3
            }
        }
    },
        {
            tableName: 'gameplays',
            sequelize
        });

    await GamePlaysModel.sync();
}

