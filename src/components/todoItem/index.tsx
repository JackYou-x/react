import './index.css'
import { useState } from 'react'
import { Todo } from '../../store'
import { observer } from "mobx-react";
import { Context } from '../../store'

interface TodoLi {
    data: Todo
}
const Li = observer((props: TodoLi) => {
    const myContext = Context().store;
    const [computed, setComponent] = useState(props.data.computed);
    const [value, setValue] = useState(props.data.value);
    const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        myContext.updateTodo(props.data, e.target.value);
    }
    const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComponent(e.target.checked);
        myContext.changeComputed(props.data.id);
    }
    const delTodo = () => {
        myContext.removeTodo(props.data);
    }
    return (
        <li className="todo-item">
            <input type="checkbox" checked={computed} onChange={checkboxChange}></input>
            <input type="text" value={value} onChange={textChange}></input>
            <button onClick={delTodo}><svg fill="rgb(117, 117, 117)" className="icon" viewBox="0 0 1024 1024" width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M836.6 193.8h100.2c18.8 0 33.9-16.2 33.9-36.3s-15.1-35.2-33.9-35.2H724.9V85.9C724.9 40 690 2 646.6 2H377.9c-42.8 0-78.3 37.5-78.3 83.9v36.3H87.2c-18.8 0-33.9 16.2-33.9 36.3s15.1 36.3 33.9 36.3h100.2l649.2-1zM804.6 253.7l-585.2 1c-20.5 0-37.2 17.6-37.2 39.2V890c0 72.6 56.3 132 125.1 132h409.4c68.8 0 125.1-59.4 125.1-132V293c0-21.7-16.7-39.3-37.2-39.3z"></path></svg></button>
            <button><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(117, 117, 117)"><path d="M913.066667 857.429333c4.693333 0 8.533333 3.84 8.533333 8.533334v51.2a8.533333 8.533333 0 0 1-8.533333 8.533333H110.933333a8.533333 8.533333 0 0 1-8.533333-8.533333v-51.2c0-4.693333 3.84-8.533333 8.533333-8.533334h802.133334zM773.354667 128.64a35.2 35.2 0 0 1 48.96-0.042667l85.397333 82.517334c13.994667 13.525333 14.357333 35.797333 0.490667 50.154666l-526.272 510.08-135.317334 43.349334a35.2 35.2 0 0 1-44.074666-44.864l44.693333-131.285334z"></path></svg></button>
        </li>
    );
})
export default Li;