import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFatching";
import PostService from "../Component/API/PostService";
import Loader from "../Component/UI/Loader/Loader";
import Button from '../Component/UI/Button/Button';
import { useNavigate } from 'react-router-dom';


const PostIdPage = () => {
    const router = useNavigate()
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        console.log(response)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <Button onClick={() => router(`/posts`)}>Back</Button>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                :  <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
