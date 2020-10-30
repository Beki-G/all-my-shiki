const router = require('express').Router();
const tagRoutes = require('./tag');

router.use('/tag', tagRoutes);

module.exports = router;
