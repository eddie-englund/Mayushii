import 'reflect-metadata';
import MayushiiClient from './client/MayushiiClient';
require('dotenv').config();

const client = new MayushiiClient({ owner: process.env.OWNER, token: process.env.TOKEN });
client.start();