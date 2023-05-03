import { createContext } from "react";

// hooks
import { useState } from "react";
import { useContext } from "react";

// create todo context
const ToDoContext = createContext();

// pass todo state context to children
export function ToDoProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [editTodo, setEditTodo] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    return (
        <ToDoContext.Provider value={{
            todos, setTodos, 
            newTodo, setNewTodo, 
            editTodo, setEditTodo, 
            editIndex, setEditIndex
        }}>
            {children}
        </ToDoContext.Provider>
    );
}

// use todo context
export function useToDoContext() {
    return useContext(ToDoContext);
}


