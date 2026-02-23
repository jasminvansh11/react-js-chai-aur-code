import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const [todo,setTodos] = useState("")
    const {addTodo} = useTodo()
    const  add = (e) =>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo, completed:false})
        setTodos("")
    }

    return (

        <form  className="flex" onSubmit={add}>
            <input
            className="w-full bg-slate-900 h-auto p-2 "
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodos(e.target.value)}
            />
            <button type="submit"  className="rounded-r-lg hover:bg-orange-900 px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

