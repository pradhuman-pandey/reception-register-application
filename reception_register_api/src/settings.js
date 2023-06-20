import path from 'path';
import 'dotenv';

export const BASE_DIR = path.dirname(path.dirname(__filename));

export const MONGO_URI = process.env.MONGO_URI;

export const SALT = 12;
