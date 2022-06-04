const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "localhost: 2017 / Pustakamcasestudy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata', BookSchema);

module.exports = bookdata;