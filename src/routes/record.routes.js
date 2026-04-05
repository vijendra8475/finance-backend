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

router.post('/', auth, allowRoles('admin'), createRecord);
router.get('/', auth, allowRoles('admin', 'analyst', 'viewer'), getRecords);
router.patch('/:id', auth, allowRoles('admin'), updateRecord);
router.delete('/:id', auth, allowRoles('admin'), deleteRecord);

module.exports = router;