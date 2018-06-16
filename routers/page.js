const router = require('koa-router')();
const page = require('../controllers/home');


router.get('/', page.home);


module.exports = router;
