import { useToDoContext } from "../ToDoProvider";

const ToDoList = () => {
    const { todos, setTodos } = useToDoContext();
    const { newTodo, setNewTodo } = useToDoContext();
    const { editTodo, setEditTodo } = useToDoContext();
    const { editIndex, setEditIndex } = useToDoContext();

    const handleChangeInput = (e) => {
        setNewTodo(e.target.value);
    };

    const handleClickAdd = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const handleRemove = (e, index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);

        setTodos(newTodos);
    };

    const handleOpenEdit = (e, index) => {
        setEditIndex(index);
        setEditTodo(todos[index]);
    };

    const handleEditInput = (e) => {
        setEditTodo(e.target.value);
    };

    const handleSaveEdit = (e, index) => {
        const newTodos = [...todos];
        newTodos[index] = editTodo;

        setTodos(newTodos);
        setEditIndex(null);
        setEditTodo("");
    };

    const handleCloseEdit = () => {
        setEditIndex(null);
        setEditTodo("");
    };

    return ( 
        <div>
            <h1>ToDo List</h1>
            <input type="text" value={newTodo} onChange={handleChangeInput} />
            <button onClick={handleClickAdd}>Añadir</button>
                {todos.map((todo, index) => (
                    <ul style={{ marginBottom: '30px'}}>
                        <li style={{ marginBottom: '10px'}} key={index}>{todo}</li>
                        <button style={{ marginRight: '20px', marginBottom: '10px'}} onClick={(e) => handleOpenEdit(e, index)}>Editar</button>
                        { editIndex === index && (
                            <div>
                                <input style={{ marginBottom: '10px'}} type="text" value={editTodo} onChange={handleEditInput} /> 
                                    <div style={{ marginBottom: '10px'}} >  
                                        <button style={{ marginRight: '20px'}} onClick={(e) => handleSaveEdit(e, index)}>Guardar</button>
                                        <button onClick={handleCloseEdit}>Cancelar</button>
                                    </div>
                                </div>
                        )}
                        <button onClick={(e) => handleRemove(e, index)}>Eliminar</button>
                    </ul>
                    
                    ))}
        </div>
     );
}
 
export default ToDoList;