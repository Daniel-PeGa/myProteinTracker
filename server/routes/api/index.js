const router = require('express').Router();
const proteinRoutes = require('./protein-routes');
const excerciseRoutes = require('./excercise-routes');

router.use('/protein', proteinRoutes);
router.use('/excercise', excerciseRoutes);

module.exports = router;