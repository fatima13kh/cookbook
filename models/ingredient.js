const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Ingredient = mongoose.model('Ingredient', userSchema);

module.exports = Ingredient;
