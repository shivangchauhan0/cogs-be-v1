import mongoose from 'mongoose';

export default async function connectToDatabase(): Promise<void> {
    try {
        const dbUrl = process.env.DB_URL || '';
        const options: any = {
            useNewUrlParser: true,
        };

        await mongoose.connect(dbUrl, options);
        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Connected to MongoDB');
        });
    } catch (error) {
        throw error;
    }
}
