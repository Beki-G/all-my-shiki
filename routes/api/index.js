const router = require('express').Router();
const tagRoutes = require('./tag');
const characterRoutes = require('./character');
const userRoutes = require('./user');
const modCharaRoutes = require('./modCharacter');

router.use('/tag', tagRoutes);
router.use('/character', characterRoutes);
router.use('/user', userRoutes);
router.use('/modChara', modCharaRoutes);

module.exports = router;
