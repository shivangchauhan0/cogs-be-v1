import { Request, Response } from 'express';
import mongoose from "mongoose";

export const errorHandler = (error: Error, req: Request, res: Response): void => {
    console.error(error.stack);
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ error: 'Invalid id' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
}