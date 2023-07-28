const mongoose = require('mongoose');
const URI = 'mongodb+srv://davidgoulartdev:9Hefj8xi@cluster0.elhsxfg.mongodb.net/?retryWrites=true&w=majority'
    ;

mongoose.set('debug', true);
// database connection



mongoose.connect(URI).then(() => console.log('Mongodb Atlas conectado!')).catch(e => console.error(e));