const TodoRepository = require('../ports/todoRepository');
const Todo = require('../core/todo');

class MongoTodoRepository extends TodoRepository {
  constructor(todoModel) {
    super();
    this.todoModel = todoModel;
  }

  async getAllTodos() {
    return this.todoModel.find();
  }

  async getTodoById(id) {
    return this.todoModel.findById(id);
  }

  async save(todo) {
    const { id, title, completed } = todo;
    let todoModel = await this.todoModel.findById(id);
    if (!todoModel) {
      todoModel = new this.todoModel({ _id: id });
    }
    todoModel.title = title;
    todoModel.completed = completed;
    return todoModel.save();
  }

  async deleteTodoById(id) {
    return this.todoModel.findByIdAndRemove(id);
  }
}

module.exports = MongoTodoRepository;
