import React, {useState} from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        console.log('addNewPost worked');
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
        console.log('addNewPost worked #2');

    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <Input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <Input
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <Button onClick={addNewPost}>Создать пост</Button>
        </form>
    );
};

export default PostForm;