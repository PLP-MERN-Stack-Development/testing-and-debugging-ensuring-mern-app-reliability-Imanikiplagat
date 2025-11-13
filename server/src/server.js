const app = require('./app');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-testing';


mongoose.connect(MONGO_URI).then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}).catch(err => {
console.error('MongoDB connection error', err);
});