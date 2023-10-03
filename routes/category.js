const express = require('express');
const router = express.Router();
// Require controller modules.
const category_controller = require('../controllers/categoryController');

/* GET users listing. */
router.get('/', category_controller.get_all_categories);

module.exports = router;
