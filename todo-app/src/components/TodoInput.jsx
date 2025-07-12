import { useState } from "react";

export function TodoInput(props) {
    const { handleAddTodo } = props;
    const [inputValue, setInputValue] = useState("");
    //console.log(inputValue);

    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} placeholder="Add a new task"/>
            <button onClick={() => {
                if(!inputValue){
                    return
                }
                handleAddTodo(inputValue); 
                setInputValue(""); //blank the input after adding a todo
            }}>
                <i class="fa-solid fa-plus"></i>            
            </button>
        </div>
    )
}
