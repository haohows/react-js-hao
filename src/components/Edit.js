

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItem } from '../redux/actions/todo';

const Edit = () => {
    const dispatch = useDispatch()
    const [note, setNote] = useState("")
    const noteChange = (e) => setNote(e.target.value)
    const [date, setDate] = useState("")
    const dateChange = (e) => setDate(e.target.value)
    const [time, setTime] = useState("")
    const timeChange = (e) => setTime(e.target.value)

    const onSubmit = () => {
        if (!note || !date || !time) {
            swlAlert.fire({
                title: '檢測到錯誤',
                text: '請確認欄位是否填妥',
                icon: 'warning',
                confirmButtonText: '確認'
            })
            return
        }
        let data = {
            id: new Date().getTime(),
            note,
            date,
            time
        }
        dispatch(addItem(data))
        setNote("")
        setDate("")
        setTime("")
    }
    return <div>
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type="text" value={note} onChange={noteChange} />
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange} />
        <p>時間：</p>
        <input type="time" value={time} onChange={timeChange} />

        <button className="add" onClick={() => onSubmit()}>新增</button>
    </div>
}

export default Edit
