import mongoose from "mongoose";

let driverSchema = new mongoose.Schema(
    {
        id: {
          type: String,
          require: true,
        },
        name: {
          type: String,
          require: true,
        },
        email: {
          type: String,
          require: true,
        },
        phone: {
          type: String,
          require: true,
          unique: true,
        },
        password: {
          type: String,
          require: true,
        },
        vehicleDetails: [
          {
            licensePlate: { type: String },
            model: { type: String },
            color: { type: String },
          },
        ],
        location: {
          latitude: { type: String },
          longitude: { type: String },
        },
        availibility: {
          type: Boolean,
        },
        ratings: {
          average: String,
          count: String,
        },
        rideHistory: [String],
        createdAt: {
          type: Date,
        },
        updatedAt: {
          type: Date,
        },
      })
      
let driverModel = mongoose.model("drivers", driverSchema, "Drivers");

export default driverModel;
