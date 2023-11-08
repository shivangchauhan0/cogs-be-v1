import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { DatasetModel, IDataset } from '../models/dataset.model';

export const getAllDatasetsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const datasets: IDataset[] = await DatasetModel.find().exec();
        res.json(datasets);
    } catch (error) {
        next(error);
    }
};

export const getDatasetByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dataset: IDataset | null = await DatasetModel.findOne({ datasetId: id }).exec();

        if (!dataset) {
            throw new Error('Dataset not found');
        }
        res.json(dataset);
    } catch (error) {
        next(error);
    }
};

export const saveDatasetContoller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dataset = {
            datasetId: uuidv4(),
            ...req.body
        }
        if (await DatasetModel.create(dataset)) {
            res.json({ id: dataset.datasetId });
        }
    } catch (error) {
        next(error);
    }
};

export const deleteDatasetByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const deletionResult = await DatasetModel.deleteOne({ datasetId: id }).exec();

        if (!deletionResult) {
            throw new Error('Dataset not found');
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

export const updateDatasetContoller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dataset = {
            ...req.body
        }
        if (await DatasetModel.findOneAndUpdate({ datasetId: id }, dataset)) {
            res.json({ message: "Dataset updated successfully" });
        }
    } catch (error) {
        next(error);
    }
};
