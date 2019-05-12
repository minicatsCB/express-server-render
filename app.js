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

app.get("/features", (req, res) => {
    res.render("features", {
        title: "Express Server Render",
        mainTitle: "Take a look at what we can offer you",
        subtitle: "A backwards poet writes inverse."
    });
});

app.listen(port, () => console.log("Listening on port " + port));
