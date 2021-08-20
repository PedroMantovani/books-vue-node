const mongoose = require('../../database');

const UserSchema = new mongoose.Schema({

  email: {
    type: String,
    unique: true
  },

  password: {
    type: String,
  },

  uid: {
    type: String
  },

  avatar: {
    type: String,
    default: "null",
  },

  cloudinary_id: {
    type: String,
    default: "null",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});




const User = mongoose.model('User', UserSchema);


module.exports = User;