const router = require('express').Router();
const tagRoutes = require('./tag');
const characterRoutes = require('./character');
const userRoutes = require('./user');
const modCharaRoutes = require('./modCharacter');
const soulSetRoutes = require('./soulSet');
const teamRoutes = require('./team');

router.use('/tag', tagRoutes);
router.use('/character', characterRoutes);
router.use('/user', userRoutes);
router.use('/modchara', modCharaRoutes);
router.use('/soulset', soulSetRoutes);
router.use('/team', teamRoutes);

module.exports = router;
