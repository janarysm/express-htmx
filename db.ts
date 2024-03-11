import mongoose from "mongoose";

const mongo = "mongodb://127.0.0.1/asyljol";

try {
    mongoose.connect(mongo);
} catch (error) {
    console.error(error) 
}


mongoose.Promise = global.Promise;
