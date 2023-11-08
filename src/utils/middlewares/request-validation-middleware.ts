import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

export function validateRequestBody(schema: Joi.Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
}

export function validateRequestPath() {
    const pathVariableSchema = Joi.object({
        id: Joi.string().guid({ version: 'uuidv4' }).required(),
    });

    return (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const { error } = pathVariableSchema.validate({id});
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
}
