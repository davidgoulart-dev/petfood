const mongoose = require('mongoose');
const URI = 'mongodb://localhost/petfood';

mongoose.set('debug', true  );
// database connection



mongoose.connect(URI).then(() => console.log('DB is connected')).catch(e => console.error(e));