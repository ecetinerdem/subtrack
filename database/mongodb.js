import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env';

if(!DB_URI) {
    throw new Error('Please define the MONGODB_URI in your environment variables inside .env.<development/production>.local');
}

const connectDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log(`Connected to database in ${NODE_ENV} mode`);

    } catch (error) {
        console.log("Error connecting database: ", error);

        process.exit(1);
    }
}

export default connectDatabase;