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

app.get("/support", (req, res) => {
    res.render("support", {
        title: "Express Server Render",
        mainTitle: "We are here to help you",
        subtitle: "You can tune a piano, but you can't tuna fish."
    });
});

app.get("/pricing", (req, res) => {
    res.render("pricing", {
        title: "Express Server Render",
        mainTitle: "Save money",
        subtitle: "A bicycle can't stand alone; it is two tired.",
        subscriptions: {
            free: {
                type: "Free",
                prices: [{
                    time: "Forever",
                    quantity: "Free"
                }]
            },
            pro: {
                type: "Pro",
                prices: [
                    {
                        time: "Weekly",
                        quantity: "10€"
                    },
                    {
                        time: "Monthly",
                        quantity: "20€"
                    },
                    {
                        time: "Yearly",
                        quantity: "30€"
                    }
                ]

            }
        }
    });
});

app.listen(port, () => console.log("Listening on port " + port));
