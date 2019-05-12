const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {
        title: "Express Server Render",
        mainTitle: "Welcome!",
        subtitle: "For sale: baby shoes. Never worn."
     });
});

app.get("/tour", (req, res) => {
    res.render("tour", {
        title: "Express Server Render",
        mainTitle: "Let's take a tour",
        subtitle: "Computer, did we bring batteries? Computer?"
    });
});

app.listen(port, () => console.log("Listening on port " + port));
