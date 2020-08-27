const express = require('express');
const router = express.Router();
const weaponsCtrl = require('../controllers/api/weapons');

router.get('/weapons', weaponsCtrl.index);
router.get('/weapons/:id', weaponsCtrl.show);
router.post('/weapons', weaponsCtrl.create);
router.delete('/weapons/:id', weaponsCtrl.delete);

module.exports = router;
