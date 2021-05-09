import Li from '../todoItem'
import './index.css'
import { Context } from '../../store'
import { observer } from 'mobx-react'

const List = observer(() => {
    const myContext = Context();
    return (
        <div className="todo-list">
            <ul>
                {myContext.store.unfinishedTodo.map(item => <Li data={item} key={item.id}></Li>)}
            </ul>
            <h5>completed {myContext.store.process}</h5>
            <ul>
                {myContext.store.finishedTodo.map(item => <Li data={item} key={item.id}></Li>)}
            </ul>
        </div>
    );
})
export default List;