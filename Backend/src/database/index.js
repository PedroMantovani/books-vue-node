const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/simp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,

});

module.exports = mongoose;