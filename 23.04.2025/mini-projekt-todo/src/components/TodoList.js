import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleToggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDeleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo">
            <h2>Todo-List</h2>
            <div className="todo-input-wrapper">
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Neue Aufgabe hinzufügen"
                />
                <button onClick={handleAddTask}>Hinzufügen</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTask(todo.id)}>Löschen</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default TodoList;