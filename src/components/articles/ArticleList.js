import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function ArticleList(){
    const [articles, setArticles] = useState([]);

    useEffect(function(){
        async function getArticles(){
            try{
                const response = await axios.get('/api/articles');
                setArticles(response.date);
            }catch(error){
                console.log('error', error);
            }
        }
        getArticles();
    }, []);
    
  
    )
}