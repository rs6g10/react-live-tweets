const router = require('express').Router();
const four0four = require('./utils/404')();

router.get('/*', four0four.notFoundMiddleware);

module.exports  = router;
