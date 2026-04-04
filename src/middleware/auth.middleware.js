const User = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    try {
        const userId = req.headers.userid;

        if (!userId) {
            return res.status(401).json({ message: "No userId provided" });
        }

        const user = await User.findById(userId);

        if (!user || user.status !== 'active') {
            return res.status(403).json({ message: "Unauthorized user" });
        }

        req.user = user; // attach user to request
        next();

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = authMiddleware;