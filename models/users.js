const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    googleId: String,
    
    userType: Number,

});

module.exports = mongoose.model('Users', usersSchema);
