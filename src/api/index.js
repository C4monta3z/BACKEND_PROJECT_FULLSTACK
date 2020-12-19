const express = require('express');
const router = express.Router();

// Child endpoints:
const tables = require('./tables/index');
const estudiante = require('./estudiante/index');
const comandante = require('./comandante/index');
const observaciones = require('./observaciones/index');


router.get('/', (req, res) => {
  res.status(200).json({
    children: 'Go to /api/v1/emojies to interact with sample children services 👶',
    message: 'This is the api base path 🍓',
  });
});

router.use('/tables', tables);
router.use('/estudiante', estudiante);
router.use('/comandante', comandante);
router.use('/observaciones', observaciones);

module.exports = router;
