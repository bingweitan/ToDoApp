import { TodoCard } from "./ToDoCard";

export function TodoList(props) {
    const { todos, selectedTab} = props;
    
    //const tab = 'All'; 
    const filteredTodosList = selectedTab === 'All' ? todos :
        selectedTab === 'Completed' ? todos.filter(val => val.complete) :
        todos.filter(val => !val.complete);
    


    return (
        <>
           {filteredTodosList.map((todo, todoIndex) => {
            return (
                <TodoCard 
                    key={todoIndex} 
                    todoIndex={todo.findIndex(val => val.input == todo.input)}
                    {...props}
                    todo={todo} />
            )

           })}
        </>
    )
}