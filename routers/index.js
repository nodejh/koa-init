const router = require('koa-router')();

const page = require('./page');
const api = require('./api');


router.use('/', page.routes(), page.allowedMethods());
router.use('/api/v0.1', api.routes(), api.allowedMethods());


module.exports = router;
