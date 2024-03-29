const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.set('port', process.env.PORT || 3333);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//database
require('./database')

app.use('/', require('./routes/main.routes'));

app.listen(app.get('port'), () => {
    console.log('Server started!');
});