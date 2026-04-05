const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const allowRoles = require('../middleware/role.middleware');

const {
    createUser,
    getUsers,
    updateUser
} = require('../controllers/user.controller');

router.post('/', auth, allowRoles('admin'), createUser);
router.get('/', auth, allowRoles('admin'), getUsers);
router.patch('/:id', auth, allowRoles('admin'), updateUser);

module.exports = router;