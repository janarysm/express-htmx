import express from "express";
import { engine } from "express-handlebars";
import bodyParser from 'body-parser'
require("dotenv").config();
import "./db";
import { authenticate } from "./controllers/login";
import { admin } from "./controllers/admin";
import cors from "cors";
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "handlebars");

app.engine("handlebars", engine());

app.use(cors());

app.use(cookieParser());

app.use(express.static("public"));

app.use(bodyParser.urlencoded({  
  extended: true
})); 

app.get("/login", (req, res) => {
  return res.render("login", {layout: ""})
})

app.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});




app.post("/login", authenticate)

app.get("/admin", admin);



try {
  app.listen(3000);
  console.log("server listening PORT 3000");
} catch (error) {
  console.log("ERROR ----------> ", error);
}

