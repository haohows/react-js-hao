
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/todo';
import '../css/post.css';
const Item = ({ note, date, time, id }) => {
    const dispatch = useDispatch()
    const resetItem = () => {
        dispatch(deleteTodo(id))
    }
    return <div className="item">
        <div>
            <div>{note}</div>
            <div>{date} {time}</div>
        </div>
        <button className="remove" onClick={() => resetItem()}>刪除</button>
    </div>
}

export default Item