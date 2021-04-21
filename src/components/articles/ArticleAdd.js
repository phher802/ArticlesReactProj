import React, {useState} from 'react';
import {post} from 'axios';

function ArticleAdd(props){
    const initialState = {language: '', category: '', title: '', content: ''}
    const [article, setArticle] = useState(initialState);

    function handleChange(event){
        setArticle({...article, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();
        if(!article.title || !article.content) return 
        async function postArticle(){
            try{
                const response = await post('/api/articles', article);
                props.history.push('/articles/${response.data._id}');
            }catch(error){
                console.log('error', error);
            }
        }
    }postArticle();

    function handleChange(){
        props.history.push('/articles');
    }
}

