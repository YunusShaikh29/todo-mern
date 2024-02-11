const mongoose = require('mongoose');

require("dotenv").config()

const db_url = process.env.DB_URL

mongoose.connect(db_url)

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Todo', todoSchema);
