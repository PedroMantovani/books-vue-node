const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// faz entendimento de envio json para a API
app.use(express.json());
// faz entendimento dos parametros na url
app.use(express.urlencoded({ extend: false }));


require('./app/controller/index')(app);


// ouvindo a porta 3000
app.listen(3000);

