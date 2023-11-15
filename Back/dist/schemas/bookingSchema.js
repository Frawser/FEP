"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    // Add other properties as needed
});
const BookingModel = mongoose_2.default.model('Booking', bookingSchema);
exports.default = BookingModel;
