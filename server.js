const express = require('express');
const app = express();

require('./helpers/db-connection')();
require('./helpers/config')();

const users = require('./routes/users');
const diets = require('./routes/diets');

const errorHandler  = require('./helpers/error-handler');
const cors = require('./helpers/cors');


app.use(express.json());
app.use(cors);

app.use('/api/users',users);
app.use('/api/diets',diets)

app.use(errorHandler);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));