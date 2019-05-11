const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {
        title: "Express Server Render"
     });
});

app.listen(port, () => console.log("Listening on port " + port));
