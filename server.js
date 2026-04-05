const app = require('./src/app');
const connectDB = require('./src/config/db');
const seedAdmin = require('./src/utils/seedAdmin');

connectDB().then(() => seedAdmin());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});