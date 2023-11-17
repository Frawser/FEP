import mongoose from "mongoose";
import Garage from "../schemas/garageSchema";
import { NextFunction, Request, Response } from "express";

// Get all garages
const getGarages = async (req: Request, res: Response) => {
  try {
    const garages = await Garage.find();
    res.json(garages);
  } catch (error) {
    res.json({ message: error });
  }
};

//Register a new garage
const registerGarage = async (req: Request, res: Response) => {
  const {
    homeOwnerName,
    address,
    phone,
    email,
    garageType,
    price,
    description,
    image,
    city,
  } = req.body;

  if (
    !homeOwnerName ||
    !address ||
    !phone ||
    !email ||
    !garageType ||
    !price ||
    !description ||
    !image ||
    !city
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing garage
  const existingGarage = await Garage.findOne({ name });
  if (existingGarage) {
    return res.status(400).json({ msg: "Garage already exists" });
  }

  const newGarage = new Garage({
    homeOwnerName,
    address,
    phone,
    email,
    garageType,
    price,
    description,
    image,
    city,
  });

  const savedGarage = await newGarage.save();
  res.json(savedGarage);
};

// Delete a garage
const deleteGarage = async (req: Request, res: Response) => {
  try {
    const removedGarage = await Garage.deleteOne({ _id: req.params.id });
    res.json(removedGarage);
  } catch (error) {
    res.json({ message: error });
  }
};

// Update a garage
const updateGarage = async (req: Request, res: Response) => {
  try {
    const updatedGarage = await Garage.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.homeOwnerName } }
    );
    res.json(updatedGarage);
  } catch (error) {
    res.json({ message: error });
  }
};

// Get a specific garage
const getSpecificGarage = async (req: Request, res: Response) => {
  try {
    const garage = await Garage.findById(req.params.id);
    res.json(garage);
  } catch (error) {
    res.json({ message: error });
  }
};

export default { getGarages, registerGarage, deleteGarage, updateGarage, getSpecificGarage };