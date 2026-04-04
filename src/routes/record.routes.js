const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const allowRoles = require('../middleware/role.middleware');


const {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
} = require('../controllers/record.controller');

router.post('/', auth, allowRoles('admin'));
router.get('/', auth, allowRoles('admin', 'analyst', 'viewer'));
router.patch('/:id', auth, allowRoles('admin'));
router.delete('/:id', auth, allowRoles('admin'));
router.post('/', createRecord);
router.get('/', getRecords);
router.patch('/:id', updateRecord);
router.delete('/:id', deleteRecord);

module.exports = router;