import { Routes, Route, Link } from "react-router-dom";
import Edit from '../components/Edit';
import List from '../components/List';
import '../css/post.css';

const Post = () => {
    return (
        <div>
            <div className="app">
                <Edit />
                <List />
            </div>

        </div>
    )
}

export default Post

