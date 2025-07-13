export function TodoCard(props) {
    const {todo, handleDeleteTodo, todoIndex, handleComplete} = props;

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleComplete(todoIndex);
                }} disabled={todo.complete}>
                    <i class="fa-solid fa-check"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex);
                }}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}