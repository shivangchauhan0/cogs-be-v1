import mongoose, { Document, Schema } from 'mongoose';

export interface ITemplate extends Document {
    templateId: string;
    templateName: string;
    templateKeys: string[];
    templateContent: string;
    createdby: string;
    createdAt: Date;
}

const templateSchema: Schema = new Schema({
    templateId: String,
    templateName: String,
    templateKeys: Array,
    templateContent: String,
    createdby: { type: String, default: 'Jhon doe' },
    createdAt: { type: Date, default: Date.now },
});

export const TemplateModel = mongoose.model<ITemplate>('Template', templateSchema);
