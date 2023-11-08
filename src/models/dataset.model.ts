import mongoose, { Document, Schema } from 'mongoose';

export interface IDataset extends Document {
  datasetId: string;
  datasetName: string;
  headerKeys: string[],
  headerNames: string[],
  records: any[],
  createdby: string;
  createdAt: Date;
}

const datasetSchema: Schema = new Schema({
  datasetId: String,
  datasetName: String,
  headerKeys: Array,
  headerNames: Array,
  records: Array,
  createdby: { type: String, default: 'Jhon doe' },
  createdAt: { type: Date, default: Date.now },
});

export const DatasetModel = mongoose.model<IDataset>('Dataset', datasetSchema);
