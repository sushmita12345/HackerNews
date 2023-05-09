import { useState, useEffect } from "react";
import { fetchData, fetchStory } from "./useFetch.js";
import { NewsCard } from "./NewsCard.js";

export const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchData().then(n => setNews(n))
    // fetchStory(20970623).then(n => console.log(n))
  }, []);

  return news.map(news => <NewsCard news={news} key={news}/>)
};
