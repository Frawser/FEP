"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const garageModel_1 = __importDefault(require("../models/garageModel"));
const router = (0, express_1.Router)();
router.post('/register', garageModel_1.default.registerGarage); //POST - Add a new garage - /data/garages/register
router.get('/all', garageModel_1.default.getAllGarages); //GET - gives all garages - /data/garages/all
router.get('/:id', garageModel_1.default.getSpecificGarage); //GET - gives one garage - /data/garages/:id
router.put('/update/:id', garageModel_1.default.updateGarage); //PUT - update a garage - /data/garages/update/:id
router.delete('/delete/:id', garageModel_1.default.deleteGarage); //DELETE - delete a garage - /data/garages/delete/:id
exports.default = router;
