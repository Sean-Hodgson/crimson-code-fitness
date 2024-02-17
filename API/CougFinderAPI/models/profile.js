const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    instagramTag: String,
    snapchatTag: String,
    favSong: String,
    Major: String,
    interests: [
        
    ]
});

module.exports = mongoose.model('Profile', profileSchema);