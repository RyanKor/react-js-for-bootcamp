import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'
import usePromise from '../lib/usePromise'


const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom : 3rem;
    width : 768px;
    margin : 0 auto;
    margin-top : 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left : 1rem;
        padding-right : 1rem;
    }
`;

const NewsList = ({category})=>{
    // const [article, setArticle] = useState(null)
    // const [loading, setLoading] = useState(false)
    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         setLoading(true)
    //         try{
    //             const query = category === 'all' ? '' : `&category=${category}`
    //             const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b893fb160a4b401fb4974a5a89d42111`)
    //             setArticle(response.data.articles)
    //         }catch(e){
    //             console.log(e)
    //         }
    //         setLoading(false)
    //     }
    //     fetchData()
    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b893fb160a4b401fb4974a5a89d42111`)
    }, [category])

    if(loading){
        return <NewsListBlock>Loading ...</NewsListBlock>
    }
    if(!response){
        return null
    }
    if(error){
        return <NewsListBlock>Error Occured!</NewsListBlock>
    }
    const {articles} =  response.data
    return (
        <NewsListBlock>
            {articles.map(article=>(
                <NewsItem key={article.key} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList