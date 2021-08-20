const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'pmanti', 
    api_key: '928554142533728', 
    api_secret: 'A2Rzfz5EvChdwj90dGTohxMe06g' 
  });

  module.exports = cloudinary;