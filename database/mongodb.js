import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env';

if(!DB_URI) {
    throw new Error('Please define the MONGODB_URI in your environment variables.');
}