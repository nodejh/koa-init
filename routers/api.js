const router = require('koa-router')();
const api = require('../controllers/api');


router.get('/test', api.testGet);
router.post('/test', api.testPost);


module.exports = router;
