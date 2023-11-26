const mongoose = require('mongoose');

function connectToMongo() {
  const dbName = 'mongodb://localhost:27017/Hospital';

  return mongoose.connect(dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Database Hospital successfully connected');
  }).catch(error => {
    console.log('Database could not be connected: ' + error);
  });
}

module.exports = connectToMongo;
