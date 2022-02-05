const mongoose = require('mongoose');
const { Schema } = mongoose;

const pollingSchema = new Schema({
  question: { type: String, required: true },
  options: [{ id: String, value: String}],
  answers: [{
      userId: String,
      optionId: String,
      value: String
  }]

});

const polling = mongoose.model('polling', pollingSchema);

module.exports = polling;