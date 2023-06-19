const express = require('express');

function todoRoutes(todoService) {
  const router = express.Router();

  // GET /todos
  router.get('/', async (req, res) => {
    try {
      const todos = await todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message:error.message?error.message:'Internal server error' });
    }
  });

  // POST /todos
  router.post('/', async (req, res) => {
    try {
      const { title } = req.body;
      const todo = await todoService.createTodo(title);
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // PUT /todos/:id
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
      const todo = await todoService.updateTodo(id, title, completed);
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // DELETE /todos/:id
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await todoService.deleteTodoById(id);
      res.json({ message: 'Todo deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
}

module.exports = todoRoutes;
