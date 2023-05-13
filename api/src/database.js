const mongoose = require('mongoose');
const URI = 'mongodb://localhost/petfood';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('debug', true  );
// database connection
require('./database');



mongoose.connect(URI).then(() => console.log('DB is connected')).catch(e => console.error(e));