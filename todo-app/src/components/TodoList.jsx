import { TodoCard } from "./ToDoCard";

export function TodoList({todos}) {
    //const { todos } = props;
    
    const tab = 'Open'; 
    const filteredTodosList = tab === 'All' ? todos :
        tab === 'Completed' ? todos.filter(val => val.complete) :
        todos.filter(val => !val.complete);
    


    return (
        <>
           {filteredTodosList.map((todo, todoIndex) => {
            return (
                <TodoCard 
                    key={todoIndex} 
                    todo={todo} />
            )

           })}
        </>
    )
}