const express = require("express");
const path = require("node:path");
const routes = require("./routes");
const passport = require("passport");
const session = require("express-session");
require("./routes/auth");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use(routes);

app.listen(3000, () => console.log("app listening on port 3000!"));
