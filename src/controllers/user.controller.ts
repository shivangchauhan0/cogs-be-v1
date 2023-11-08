import { NextFunction, Request, Response } from 'express';
import { User, getAllUsers, createUser } from '../models/user.model';

export const getAllUsersController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const createUserController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser: User = req.body;
        createUser(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};
