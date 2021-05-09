import { useState } from 'react'
import TodoAdd from '../todoAdd'
import './index.css';
function Header() {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }
    const closeModel = () => {
        setShow(false);
    }
    return (
        <>
            <div className="header">
                <span>mobx todo</span>
                <button onClick={showModal}>ADD NEW</button>
            </div>
            <TodoAdd isShow={show} closeModel={closeModel}></TodoAdd>
        </>
    );
}
export default Header;