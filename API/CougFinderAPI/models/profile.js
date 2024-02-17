const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    email: String,
    weight: String,
    Height: String,
    Interests: [

    ]
    
});

module.exports = mongoose.model('Profile', profileSchema);