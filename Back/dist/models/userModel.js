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
const userSchema_1 = __importDefault(require("../schemas/userSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Register a new user
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    // Check for existing user
    const existingUser = yield userSchema_1.default.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
    }
    // Create salt & hash
    const salt = yield bcrypt_1.default.genSalt(10);
    const hash = yield bcrypt_1.default.hash(password, salt);
    const newUser = new userSchema_1.default({
        username,
        email,
        password: hash,
    });
    const savedUser = yield newUser.save();
    res.json(savedUser);
});
// Login User
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    // Check for existing user
    const user = yield userSchema_1.default.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: "User does not exist" });
    }
    // Validate password
    const isMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
    }
    res.json(user);
});
//Get User Data
const getUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user) {
        const { _id, username, email, bookings } = req.user;
        userSchema_1.default.findById(_id)
            .select("-password")
            .then((user) => {
            res.status(200).json(user);
        })
            .catch((err) => {
            res.status(500).json({ error: err });
        });
    }
    else {
        res.status(401).json({ msg: "User data not found" });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userSchema_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.default = { registerUser, loginUser, getUserData, getAllUsers };
