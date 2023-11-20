import { Router } from 'express';
import garageModel from '../models/garageModel';

const router = Router();

router.post('/register', garageModel.registerGarage); //POST - Add a new garage - /data/garages/register
router.get('/all', garageModel.getAllGarages); //GET - gives all garages - /data/garages/all
router.get('/:id', garageModel.getSpecificGarage); //GET - gives one garage - /data/garages/:id
router.put('/update/:id', garageModel.updateGarage); //PUT - update a garage - /data/garages/update/:id
router.delete('/delete/:id', garageModel.deleteGarage); //DELETE - delete a garage - /data/garages/delete/:id

export default router;