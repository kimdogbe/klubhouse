const { Router } = require("express");
const pageController = require("../controllers/pageController");
const router = Router();

router.get('/', pageController.showHomePage);
router.get('/login', pageController.showLoginPage);
router.get('/sign-up', pageController.showSignUpPage)

router.post('/login', (req, res) => {});
router.post('/sign-up', (req, res) => {});

router.post('/new-message', (req, res) => {});
router.post('/delete-message', (req, res) => {});

module.exports = router;