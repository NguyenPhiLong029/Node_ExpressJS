const express = require('express')
const router = express.Router();

const newsCotroller = require('../app/controllers/news-controller');

router.use('/:slug', newsCotroller.showDetail);
router.use('/', newsCotroller.newsPage);

module.exports = router;
