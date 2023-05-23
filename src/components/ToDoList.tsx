import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState<any[]>([]);
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (e: any) => {
        setNewTodo(e.target.value);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const handleTodoRemove = (index: any) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Add a new todo" value={newTodo} onChange={handleInputChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleTodoRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
