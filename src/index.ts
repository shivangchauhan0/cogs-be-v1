require('dotenv').config();

import express, { Express, NextFunction, Request, Response } from 'express';
import connectToDatabase from './database/database.config';
import * as corsMiddleware from 'cors';

import userRouter from './routes/user.router';
import datasetRouter from './routes/dataset.router';
import templateRouter from './routes/templates.router';
import mongoose from 'mongoose';

const app: Express = express();
app.use(express.json());
app.use(corsMiddleware.default());

connectToDatabase();

app.use('/users', userRouter);
app.use('/datasets', datasetRouter);
app.use('/templates', templateRouter);

app.use((err: Error, req: Request, res: Response): void => {
    console.error(err.stack);
    if (err instanceof mongoose.Error.CastError) {
        res.status(400).json({ error: 'Invalid id' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});

