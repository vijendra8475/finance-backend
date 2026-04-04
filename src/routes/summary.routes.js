const express = require('express');
const router = express.Router();

const { getSummary } = require('../controllers/summary.controller');

const auth = require('../middleware/auth.middleware');
const allowRoles = require('../middleware/role.middleware');

router.get('/', auth, allowRoles('admin', 'analyst'), getSummary);

module.exports = router;