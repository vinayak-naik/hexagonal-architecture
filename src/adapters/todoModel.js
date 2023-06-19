const mongoose = require('mongoose');

function createTodoModel(mongoose) {
  const todoSchema = new mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  return mongoose.model('Todo', todoSchema);
}

module.exports = {
  create: createTodoModel
};
