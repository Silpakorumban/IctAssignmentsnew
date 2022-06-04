const mongoose = require('mongoose');
// to remove the warning (Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.) i have added  useNewUrlParser: true,
// useUnifiedTopology: true,
//     useNewUrlParser: true
mongoose.connect('mongodb://localhost:27017/Library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title: String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata', AuthorSchema);

module.exports = authordata;