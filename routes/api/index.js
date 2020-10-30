const router = require('express').Router();
const tagRoutes = require('./tag');
const characterRoutes = require('./character');

router.use('/tag', tagRoutes);
router.use('/character', characterRoutes);

module.exports = router;
