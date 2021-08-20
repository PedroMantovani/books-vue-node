const mongoose = require('../../database');

const LivrosSchema = new mongoose.Schema({

     titulo: {
          type: String,
          require: true,
     },

     autor: {
          type: String,
          required: true
     },

     editora: {
          type: String,
          required: true
     },

     edicao: {
          type: String,
          required: true

     },

     createdAt: {
          type: Date,
          default: Date.now,
     },

});


const Livros = mongoose.model('Livros', LivrosSchema);


module.exports = Livros;