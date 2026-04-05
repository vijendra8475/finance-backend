const User = require('../models/user.model');

const seedAdmin = async () => {
    const adminExists = await User.findOne({ role: 'admin' });

    if (!adminExists) {
        await User.create({
            name: 'Admin',
            email: 'admin@test.com',
            password: 'admin123',
            role: 'admin'
        });
        console.log('✅ Admin user created');
    }
};

module.exports = seedAdmin;