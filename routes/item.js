const express = require('express');
const router = express.Router();
// Require controller modules.
const item_controller = require('../controllers/itemController');

/* GET users listing. */
router.get('/', item_controller.get_all_items);

module.exports = router;
