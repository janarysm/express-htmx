import express from "express";
import { engine } from "express-handlebars";

import mongoose, { Schema } from "mongoose";

const mongo = "mongodb://127.0.0.1/asyljol";
mongoose.connect(mongo);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const testSchema = new Schema({
  name: {
    type: String,
  },
});
const Test = mongoose.model("Test", testSchema)

const app = express();

app.set("view engine", "handlebars");
app.engine("handlebars", engine());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  // try {
  //   const newTest = new Test({
  //     name: "test name",
  //   });
  //   await newTest.save();
  // } catch (error) {
  //   console.log(error)
  // }
  res.render("main", { layout: "index" });
});

try {
  app.listen(3000);
  console.log("server listening PORT 3000");
} catch (error) {
  console.log("ERROR ----------> ", error);
}
