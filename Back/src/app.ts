import express from 'express';
import cors from 'cors';
import userController from './controllers/userController';
import garageController from './controllers/garageController';


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/data/users', userController);
app.use('/data/garages', garageController);

export default app;
