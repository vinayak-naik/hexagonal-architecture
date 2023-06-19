const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { TodoService } = require('./core/todo');
const MongoTodoRepository = require('./adapters/mongoTodoRepository');
const TodoModel = require('./adapters/todoModel');
const todoRoutes = require('./adapters/todoRoutes');
const dotenv = require('dotenv');

dotenv.config()

// Set up the Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Parse incoming requests with JSON payloads
// app.use(bodyParser.json());

// To parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "x-access-token,Content-Type");
  res.header("Access-Control-Expose-Headers", "x-access-token,Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Content-Type", "application/json");
  next();
});

// Set up the Todo service and repository
const todoModel = TodoModel.create(mongoose);
const todoRepository = new MongoTodoRepository(todoModel);
const todoService = new TodoService(todoRepository);

// Set the port no
app.set("port", process.env.PORT );

// Set up the Todo routes
app.use('/todos', todoRoutes(todoService));

// Error handling middleware
app.use("/", (err, req, res) => {
  err.status = 500;
  logger.error("index | Error: ", err);
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: "Internal Server Error",
    },
  });
});

app.use("/", (err, req, res) => {
  err.status = 400;
  logger.error("index | Error: ", err);
  res.status(err.status || 400).json({
    success: false,
    error: {
      message: "Server Error",
    },
  });
});

app.use((req, res) => {
  var err = new Error("URL Not Found");
  err.status = 404;
  logger.error("index | Invalid Url", req.url);
  res.status(err.status || 404).json({
    success: false,
    error: {
      message:
        "URL '" + req.url + "' with method '" + req.method + "' not exist",
    },
  });
});

// Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
// Unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Promise Rejection:", reason);
  process.exit(1);
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
