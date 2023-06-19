class Todo {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAllTodos() {
    return this.todoRepository.getAllTodos();
  }

  async createTodo(title) {
    const todo = new Todo();
    todo.title = title;
    return this.todoRepository.save(todo);
  }

  async updateTodo(id, title, completed) {
    const todo = await this.todoRepository.getTodoById(id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.title = title;
    todo.completed = completed;
    return this.todoRepository.save(todo);
  }

  async deleteTodoById(id) {
    const todo = await this.todoRepository.getTodoById(id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    return this.todoRepository.deleteTodoById(id);
  }
}

module.exports = { Todo, TodoService };
