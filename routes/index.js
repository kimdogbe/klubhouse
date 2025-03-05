const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/sign-up', (req, res) => {
  res.render('sign-up')
})

router.post('/login', (req, res) => {});
router.post('/sign-up', (req, res) => {});

router.post('/new-message', (req, res) => {});
router.post('/delete-message', (req, res) => {});

module.exports = router;