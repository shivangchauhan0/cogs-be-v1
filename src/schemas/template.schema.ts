import * as Joi from 'joi';

export const saveTemplateSchema = Joi.object({
    templateName: Joi.string().required(),
    templateKeys: Joi.array().items(Joi.string()).required(),
    templateContent: Joi.string().required(),
});