const express = require('express');
const passport = require('passport');
var LocalStrategy = require('passport-local');
const bcrypt = require("bcryptjs");
const pool = require("../db/pool")

const customFields = {
  usernameField: 'email',
  passwordField: 'password'
};

passport.use(
  new LocalStrategy(customFields, async (email, password, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      const user = rows[0];
      
      if (!user) {
        return done(null, false, { message: "Incorrect email or password" });
      }
      const match = await bcrypt.compare(password, user.pwhash);
      if (!match) {
        return done(null, false, { message: "Incorrect email or password" });
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];

    done(null, user);
  } catch(err) {
    done(err);
  }
});
