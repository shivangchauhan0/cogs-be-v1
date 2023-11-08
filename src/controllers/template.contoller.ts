import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { ITemplate, TemplateModel } from '../models/template.model';

export const getAllTemplatesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const templates: ITemplate[] = await TemplateModel.find().exec();
        res.json(templates);
    } catch (error) {
        next(error);
    }
};

export const getTemplateByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const template: ITemplate | null = await TemplateModel.findOne({ templateId: id }).exec();

        if (!template) {
            throw new Error('Template not found');
        }
        res.json(template);
    } catch (error) {
        next(error);
    }
};

export const saveTemplateContoller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const template = {
            templateId: uuidv4(),
            ...req.body
        }
        if (await TemplateModel.create(template)) {
            res.json({ id: template.datasetId });
        }
    } catch (error) {
        next(error);
    }
};
