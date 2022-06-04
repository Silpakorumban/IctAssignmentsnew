const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://silpacp:Mithun2807@@cluster0.rzorreb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata', BookSchema);

module.exports = bookdata;