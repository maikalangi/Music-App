const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    artwork: String,
    title: String,
    userHandle: String,
    genre: String,
    id: String,
})

const Playlist = mongoose.model('playlist', playlistSchema);

module.exports = Playlist;