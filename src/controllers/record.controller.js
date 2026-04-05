const Record = require('../models/record.model');
const { recordSchema } = require('../utils/validator');


// Create Record
exports.createRecord = async (req, res) => {
    try {
        // validation
        const { error } = recordSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // actual logic
        const record = await Record.create({
            ...req.body,
            createdBy: req.user._id
        });

        res.status(201).json(record);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Records (with filters)
exports.getRecords = async (req, res) => {
    try {
        const { type, category } = req.query;

        let filter = {};

        if (type) filter.type = type;
        if (category) filter.category = category;

        const records = await Record.find(filter);
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Record
exports.updateRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Record
exports.deleteRecord = async (req, res) => {
    try {
        await Record.findByIdAndDelete(req.params.id);
        res.json({ message: 'Record deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};