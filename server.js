const express = require("express");
const path = require("path");

const server = express();
const port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

//Middleware
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.urlencoded({ extended: false}));
server.use(express.json())
server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
    res.render("index");
});

server.get("/contact", (req, res) => {
    res.render("contact");
});

server.get("/resume", (req, res) => {
    res.render("resume");
});

server.get("/projects", (req, res) => {
    res.render("projects");
});

server.post("/send", (req, res) => {
    res.json({ message: "Message received."})
})

server.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${port}`)
});