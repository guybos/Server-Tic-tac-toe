import express from 'express';
import cors from 'cors';
import { getDB } from './DataBase';
import {logger} from './Utils/logger';
import { router as ColumnWinRouter} from "./Routers/GamePlayWinColumnRouter";
import { router as DiagonalWinRouter} from "./Routers/GamePlayWinDiagonalRouter";
import { router as RowWinRouter} from "./Routers/GamePlayWinRowRouter";
import {router as GamePlaysRouter} from "./Routers/GamePlaysRouter"
import {router as GameRouter} from "./Routers/GameRouter"

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/game", GameRouter);
app.use("/api/gamePlay",GamePlaysRouter);
app.use("/api/win/diagonal", DiagonalWinRouter)
app.use("/api/win/row", RowWinRouter)
app.use("/api/win/column", ColumnWinRouter)



export const server = app.listen(port, async () => {
    logger.info(`Listening on port ${port}!`);
    await getDB();
});