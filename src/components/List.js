
import { useSelector, useDispatch } from 'react-redux'
import Item from './Item'
import '../css/post.css';
const List = () => {
    const todoList = useSelector(state => state.todo.todoList)
    return <div className="list">
        {
            todoList.map(item => {
                const { note, date, time, id } = item
                return <Item note={note} date={date} time={time} id={id} key={id} />
            })
        }
    </div>
}

export default List