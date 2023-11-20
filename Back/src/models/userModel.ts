import User from "../schemas/userSchema";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { RequestWithUser } from "../types/types";

// Register a new user
const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists" });
  }

  // Create salt & hash
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    password: hash,
  });

  const savedUser = await newUser.save();
  res.json(savedUser);
};

// Login User
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "User does not exist" });
  }

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  res.json(user);
};

//Get User Data
const getUserData = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    const { _id, username, email, bookings } = req.user;

    User.findById(_id)
      .select("-password")
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  } else {
    res.status(401).json({ msg: "User data not found" });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default { registerUser, loginUser, getUserData, getAllUsers };
