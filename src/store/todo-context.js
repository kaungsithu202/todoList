import React,{useState} from 'react'


const TodoContext =React.createContext();
export default TodoContext;
export const TodoContextProvider = props=>{
         const [inputText, setInputText] = useState("");
		const [todos, setTodos] = useState([]);
}