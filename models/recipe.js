const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, 
  ingredients: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
    required: true,
    },
  ],
});

const Recipe = mongoose.model('Recipe', userSchema);

module.exports = Recipe;
