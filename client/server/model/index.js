const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/soloProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected to mongoDB');
})
  .catch(e => console.error('something is wrong with mongoDB: ', e));

module.exports = mongoose;