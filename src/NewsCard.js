import {useState, useEffect} from 'react';
import {fetchStory} from "./useFetch"


export const NewsCard = ({news}) => {

    const [newsData, setNewsData] = useState({})

    useEffect(() => {
        fetchStory(news).then(data => data && data.url && setNewsData(data))
    },[])
    return newsData && newsData.url ? (
        <>
        <a href={newsData.url}><p>{newsData.title}</p></a>
       
        <p>By: {newsData.by}</p>
        <p>Posted: {newsData.time}</p>
        </>
    ):null
}