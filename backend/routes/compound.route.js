const express = require('express');
const {
    populateCompoundTable,
    getAllCompounds,
    getCompoundUsingId,
    createCompound,
    updateCompound,
    deleteCompound
} = require('../controllers/compound.controller')

const router = express.Router();

router.post('/populateCompoundTable', populateCompoundTable);
router.get('/getAllCompounds', getAllCompounds);
router.get('/getCompoundUsingId/:id', getCompoundUsingId);
router.post('/createCompound', createCompound);
router.put('/updateCompound/:id', updateCompound);
router.delete('/deleteCompound/:id', deleteCompound);

module.exports = router;