"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.SECRET_KEY;
const generateToken = (user) => {
    if (!secretKey) {
        console.error('No secret key');
        process.exit(1);
    }
    return jsonwebtoken_1.default.sign({
        id: user._id,
        username: user.username,
        email: user.email,
    }, secretKey, { expiresIn: '7d' });
};
exports.generateToken = generateToken;
const verifyToken = (req, res, next) => {
    var _a;
    try {
        if (!secretKey) {
            console.error('No secret key');
            return res.status(500).json('Server error');
        }
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return res.status(403).json('You are not authorized');
        }
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json('Token has expired');
        }
        return res.status(401).json('Invalid token');
    }
};
exports.verifyToken = verifyToken;
