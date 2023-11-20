"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const garageSchema_1 = __importDefault(require("../schemas/garageSchema"));
// Get all garages
const getAllGarages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const garages = yield garageSchema_1.default.find();
        res.json(garages);
    }
    catch (error) {
        res.json({ message: error });
    }
});
//Register a new garage
const registerGarage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { garageOwnerName, adress, phone, email, garageType, price, description, image, city, } = req.body;
    if (!garageOwnerName ||
        !adress ||
        !phone ||
        !email ||
        !garageType ||
        !price ||
        !description ||
        !image ||
        !city) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    // Check for existing garage
    const existingGarage = yield garageSchema_1.default.findOne({ garagesOwnerName: garageOwnerName });
    if (existingGarage) {
        return res.status(400).json({ msg: "Garage already exists" });
    }
    const newGarage = new garageSchema_1.default({
        garageOwnerName,
        adress,
        phone,
        email,
        garageType,
        price,
        description,
        image,
        city,
    });
    const savedGarage = yield newGarage.save();
    res.json(savedGarage);
});
// Delete a garage
const deleteGarage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removedGarage = yield garageSchema_1.default.deleteOne({ _id: req.params.id });
        res.json(removedGarage);
    }
    catch (error) {
        res.json({ message: error });
    }
});
// Update a garage
const updateGarage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedGarage = yield garageSchema_1.default.updateOne({ _id: req.params.id }, { $set: { name: req.body.garageOwnerName } });
        res.json(updatedGarage);
    }
    catch (error) {
        res.json({ message: error });
    }
});
// Get a specific garage
const getSpecificGarage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const garage = yield garageSchema_1.default.findById(req.params.id);
        res.json(garage);
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.default = { getAllGarages, registerGarage, deleteGarage, updateGarage, getSpecificGarage };
