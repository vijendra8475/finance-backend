const Record = require('../models/record.model');

exports.getSummary = async (req, res) => {
    try {
        // Total Income
        const income = await Record.aggregate([
            { $match: { type: 'income' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // Total Expense
        const expense = await Record.aggregate([
            { $match: { type: 'expense' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // Category Wise
        const categoryWise = await Record.aggregate([
            {
                $group: {
                    _id: '$category',
                    total: { $sum: '$amount' }
                }
            }
        ]);

        // Recent Transactions
        const recent = await Record.find().sort({ createdAt: -1 }).limit(5);

        const totalIncome = income[0]?.total || 0;
        const totalExpense = expense[0]?.total || 0;

        res.json({
            totalIncome,
            totalExpense,
            netBalance: totalIncome - totalExpense,
            categoryWise: categoryWise.map(c => ({
                category: c._id,
                total: c.total
            })),
            recentTransactions: recent
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};