"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), req.body.text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Todo created', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(201).json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const TodoId = req.params.id;
    const newText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === TodoId);
    if (todoIndex < 0) {
        throw new Error('Cannot find todo!');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, newText);
    res.status(500).json({ message: 'Todo updated', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const TodoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === TodoId);
    if (todoIndex < 0) {
        throw new Error('Cannot find todo!');
    }
    ;
    TODOS.splice(todoIndex, 1);
    res.status(500).json({ message: 'Todo deleted' });
};
exports.deleteTodo = deleteTodo;
