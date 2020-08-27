const express = require('express');
const router = express.Router();
const weaponsCtrl = require('../controllers/api/weapons');

router.get('/', weaponsCtrl.index);
router.post('/weapons', weaponsCtrl.create);

module.exports = router;
