//jshint esversion:6
import React, {useState, useEffect} from 'react';
import {get, patch} from 'axios';

function ArticleEdit(){
    const intialState = {language: '', category: '', title: '', content: ''}
    const [article, setArticle] = useState(initialState);

    useEffect(function(){
        async function getArticle(){
            try{
                const response = await get('/api/articles/${props.match.params._id}');
                setArticle(response.data);
            }catch(error){
                console.log(error);
            }
        }
        getArticle();
    }, [props]);

    function handleSubmit(event) {
        event.preventDefault();
        async function updateArticle(){
            try{
                await patch('/api/articles/${article._id}', article);
                props.history.push('/articles/${article._id}');
            }catch(error){
                console.log(error);
            }
        }
        updateArticle();
    }
    function handleChange(event){
        setArticle({...article, [event.target.name]: event.target.value})
    }

    function handleCancel(){
        props.history.push('/articles/${article._id}');
    }

}
