const express = require('express')
const router = express.Router();

const siteCotroller = require('../app/controllers/site-controller');

router.use('/search', siteCotroller.searchPage);
router.use('/', siteCotroller.homePage);

module.exports = router;
