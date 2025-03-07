const { Router } = require("express");
const pageController = require("../controllers/pageController");
const userController = require("../controllers/userController");
const passport = require("passport");
const validation = require("express-validator");
const router = Router();

router.get('/', pageController.showHomePage);
router.get('/login', pageController.showLoginPage);
router.get('/sign-up', pageController.showSignUpPage);
router.get('/create-message', pageController.showCreateMessagePage);
router.get('/login-failure', (req, res) => {
  res.render("login-failure");
})
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
router.post(
  "/create-message", 
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-failure",
  }),
  userController.addNewMessageToDB
);

// TODO: Add validation to forms using express-validator
router.post('/login', passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login-failure"
}));
router.post('/sign-up', userController.addUserToDB);

router.post('/new-message', (req, res) => {});
router.post('/delete-message', (req, res) => {});

module.exports = router;