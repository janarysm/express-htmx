import mongoose, { Schema } from "mongoose";

const mongo = "mongodb://127.0.0.1/asyljol";
mongoose.connect(mongo);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));