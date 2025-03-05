const express = require("express");
const path = require("node:path");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => console.log("app listening on port 3000!"));
