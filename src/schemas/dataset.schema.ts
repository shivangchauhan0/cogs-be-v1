import * as Joi from 'joi';

const recordSchema = Joi.object().unknown();

export const saveDatasetSchema = Joi.object({
    datasetName: Joi.string().required(),
    headerKeys: Joi.array().items(Joi.string()).required(),
    headerNames: Joi.array().items(Joi.string()).required(),
    records: Joi.array().items(recordSchema).required(),
});