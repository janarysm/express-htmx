import express from "express";
import { engine } from "express-handlebars";
import bodyParser from 'body-parser'
import "./db";
import { authenticate } from "./controllers/login";
import { admin } from "./controllers/admin";
import cors from "cors";
import cookieSession from "cookie-session";

const app = express();

app.set("view engine", "handlebars");

app.engine("handlebars", engine());

app.use(cors())

app.use(cookieSession({
  name: "current-session",
  keys: ["VERYSECRET"],
  httpOnly: true,
}))

app.use(express.static("public"));

app.use(bodyParser.urlencoded({  
  extended: true
})); 


app.get("/login", (req, res) => {
  return res.render("login", {layout: ""})
})

app.post("/login", authenticate)

app.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});

app.get("/admin", admin);



try {
  app.listen(3000);
  console.log("server listening PORT 3000");
} catch (error) {
  console.log("ERROR ----------> ", error);
}

