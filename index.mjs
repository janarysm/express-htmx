import express from "express";
import { engine } from "express-handlebars";

const app = express()
app.enable('view cache')
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render('home')
})

try {
    app.listen(3000)
    console.log("Server is runing on 3000 port")
} catch (error) {
    console.log("Error ------> ", error)
}