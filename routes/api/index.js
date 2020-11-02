const router = require('express').Router();
const tagRoutes = require('./tag');
const characterRoutes = require('./character');
const userRoutes = require('./user');

router.use('/tag', tagRoutes);
router.use('/character', characterRoutes);
router.use('/user', userRoutes);

module.exports = router;
