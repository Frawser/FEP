"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userModel_1 = __importDefault(require("../models/userModel"));
const verifyToken_1 = require("../middleware/verifyToken");
const router = (0, express_1.Router)();
router.post('/register', userModel_1.default.registerUser); //POST - Register a new user & recieve a token- /data/users/register
router.post('/login', userModel_1.default.loginUser); //POST - Login a user & recieve a token- /data/users/login
router.get('/me', verifyToken_1.verifyToken, userModel_1.default.getUserData); //GET - gives userinfo - /data/users/me
router.get('/all', userModel_1.default.getAllUsers); //GET - gives all users - /data/users/all
// POST example
// {
//   "email": "test@test.com",
//   "password": "Password123!"
// }
exports.default = router;
